"use client";
import React from "react";
import { Boxes } from "@/ui/background-boxes";
import { cn } from "@/utils/cn";
import Image from "next/image";
import container from '@public/assets/images/container-profile.svg';

export function BackgroundBoxesProfile() {
  return (
    <div className="h-lvh relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <Image src={container} alt="container" className={cn('z-20')} />
    </div>
  );
}
