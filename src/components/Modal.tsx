"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      onClick={() => {
        router.replace("/radovi", { scroll: false });
      }}
      className="fixed inset-0 z-50 grid place-content-center bg-background/85 duration-300 animate-in fade-in"
    >
      <div className="overflow-y-scroll">
        <div className="my-20" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  );
}
