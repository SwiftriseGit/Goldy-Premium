"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Pre-computed outside component to satisfy React purity rules
const GOLD_COLORS = [
  [0.75, 0.65, 0.42],
  [0.95, 0.85, 0.5],
  [0.55, 0.15, 0.15],
  [1.0, 0.9, 0.7],
];

function buildParticleData(count: number) {
  const pos = new Float32Array(count * 3);
  const sz = new Float32Array(count);
  const col = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    pos[i * 3]     = (Math.random() - 0.5) * 20;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    sz[i] = Math.random() * 6 + 2;
    const c = GOLD_COLORS[Math.floor(Math.random() * GOLD_COLORS.length)];
    col[i * 3]     = c[0];
    col[i * 3 + 1] = c[1];
    col[i * 3 + 2] = c[2];
  }
  return { pos, sz, col };
}

function buildOrbData(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    pos: [
      (Math.random() - 0.5) * 14,
      (Math.random() - 0.5) * 8,
      -2 - Math.random() * 4,
    ] as [number, number, number],
    size: 0.12 + Math.random() * 0.28,
    speed: 0.3 + Math.random() * 0.5,
    phase: Math.random() * Math.PI * 2,
    color: i % 2 === 0 ? "#bfa76a" : "#e8d48a",
  }));
}

// Module-level stable data (created once)
const PARTICLE_DATA = buildParticleData(120);
const ORB_DATA = buildOrbData(6);

// Camera controller that follows mouse
function CameraController({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const { camera } = useThree();
  const targetRotation = useRef({ x: 0, y: 0 });
  const currentRotation = useRef({ x: 0, y: 0 });

  useFrame(() => {
    // Smooth interpolation of target rotation based on mouse position
    targetRotation.current.y = mousePosition.x * 0.3;
    targetRotation.current.x = -mousePosition.y * 0.2;

    // Smoothly interpolate camera rotation
    currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * 0.05;
    currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * 0.05;
    
    camera.rotation.set(currentRotation.current.x, currentRotation.current.y, 0);
  });

  return null;
}

function Particles({ count = 120, mousePosition }: { count?: number; mousePosition: { x: number; y: number } }) {
  const mesh = useRef<THREE.Points>(null!);
  const t = useRef(0);

  const [positions, sizes, colors] = useMemo(() => {
    return [PARTICLE_DATA.pos, PARTICLE_DATA.sz, PARTICLE_DATA.col];
  }, []);

  useFrame((_, delta) => {
    t.current += delta * 0.12;
    if (mesh.current) {
      // Add subtle movement based on mouse position
      mesh.current.rotation.y = t.current * 0.04 + mousePosition.x * 0.1;
      mesh.current.rotation.x = Math.sin(t.current * 0.05) * 0.08 + mousePosition.y * 0.05;
      
      const pos = mesh.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        pos[i * 3 + 1] += Math.sin(t.current + i * 0.5) * 0.002;
        // Add mouse influence to particle positions
        pos[i * 3] += (mousePosition.x * 2 - pos[i * 3]) * 0.001;
        pos[i * 3 + 2] += (mousePosition.y * 2 - pos[i * 3 + 2]) * 0.001;
      }
      mesh.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial size={0.12} vertexColors transparent opacity={0.75} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function FloatingOrbs({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const group = useRef<THREE.Group>(null!);
  const orbs = ORB_DATA;

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.children.forEach((child, i) => {
      const orb = orbs[i];
      child.position.y = orb.pos[1] + Math.sin(clock.elapsedTime * orb.speed + orb.phase) * 0.6;
      child.position.x = orb.pos[0] + Math.cos(clock.elapsedTime * orb.speed * 0.7 + orb.phase) * 0.3 + mousePosition.x * 0.5;
      child.position.z = orb.pos[2] + mousePosition.y * 0.5;
    });
  });

  return (
    <group ref={group}>
      {orbs.map((orb, i) => (
        <mesh key={i} position={orb.pos}>
          <sphereGeometry args={[orb.size, 12, 12]} />
          <meshStandardMaterial color={orb.color} emissive={orb.color} emissiveIntensity={0.6} roughness={0.2} metalness={0.9} transparent opacity={0.85} />
        </mesh>
      ))}
    </group>
  );
}

export default function ParticleField() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse position to -1 to 1 range
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 z-15 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} gl={{ alpha: true, antialias: false }}>
        <CameraController mousePosition={mousePosition} />
        <ambientLight intensity={0.4} color="#bfa76a" />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#bfa76a" />
        <pointLight position={[-5, -3, 3]} intensity={0.8} color="#8B1E1E" />
        <Particles mousePosition={mousePosition} />
        <FloatingOrbs mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
}