'use client'

import React from 'react';
import AnimatedNumbers from "react-animated-numbers";

export default function AnimationNumbers({ number }: { number: number }) {
  return (
    <div className="flex justify-start items-center">
      <AnimatedNumbers
        transitions={(index) => ({
          type: "spring",
          duration: index + 1.5,
        })}
        animateToNumber={number}
      /> +
    </div>
  );
}