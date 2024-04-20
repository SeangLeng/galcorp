"use client";
import React from "react";
import { Boxes } from "@/ui/background-boxes";
import { cn } from "@/utils/cn";

import sky from '@public/assets/images/sky.png';
import whatapp from '@public/assets/images/whatapp.png';
import Image from "next/image";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-auto relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute p-10 inset-0 w-full h-full bg-slate-900 z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="z-10 p-5">
        <h1 className='font-bold mt-10 text-center text-blue-color text-shadow'>BushPal</h1>
        <div className='py-10 block md:flex gap-10 justify-center items-center'>
          <Image src={sky} alt='sky' className='rounded-2xl md:w-auto w-full hover:scale-110 transition-all' />
          <Image src={whatapp} alt='whatapp' className='rounded-2xl md:mt-0 mt-10 md:w-auto w-full hover:scale-110 transition-all' />
        </div>
      </div>
    </div>
  );
}
