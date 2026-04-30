import React from "react";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-[#f5f3e7] font-serif  flex flex-col items-center justify-center">
      {children}
    </div>
  );
}
