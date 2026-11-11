"use client";

import dynamic from "next/dynamic";

const Background3D = dynamic(() => import("@/components/Background3D"), {
  ssr: false,
  loading: () => null,
});

export default function Background3DLoader() {
  return <Background3D />;
}
