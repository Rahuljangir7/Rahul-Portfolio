"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

const ViewCounter = () => {
  const [viewCount, setViewCount] = useState<number | null>(null);

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        const hasVisited = localStorage.getItem("has_visited");

        if (!hasVisited) {
          // New visitor
          const res = await fetch("/api/visitors", {
            method: "POST",
          });
          const data = await res.json();
          if (data.status === "success") {
            localStorage.setItem("has_visited", "true");
            setViewCount(data.count);
          }
        } else {
          // Returning visitor
          const res = await fetch("/api/visitors");
          const data = await res.json();
          if (data.status === "success") {
            setViewCount(data.count);
          }
        }
      } catch (error) {
        console.error("Failed to track visitor:", error);
      }
    };

    trackVisitor();
  }, []);

  if (viewCount === null) return null;

  return (
    <div className="flex items-center gap-2 mt-6 px-4 py-2 bg-white/5 rounded-full border border-white/10 w-max">
      <Eye size={16} className="text-primary-400" />
      <span className="text-sm font-medium text-slate-300">
        Total Views: <span className="text-white font-bold">{viewCount}</span>
      </span>
    </div>
  );
};

export default ViewCounter;
