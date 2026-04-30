"use client";

import { MotionItem } from "../MotionSection";

export default function ResultsCount({ count, activeCategory }: { count: number; activeCategory: string }) {
  return (
    <MotionItem delay={0.3}>
      <div className="text-center mt-12">
        <p className="text-[#7c6f57] font-serif text-lg">
          Showing {count} {count === 1 ? "photo" : "photos"}
          {activeCategory !== "All" && ` in ${activeCategory}`}
        </p>
      </div>
    </MotionItem>
  );
}
