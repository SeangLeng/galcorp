"use client";
import { TextGenerateEffect } from "@/ui/text-generate-effect";

export function TextGenerateEffectDemo({ text }: { text: string }) {
  return (
    <div>
      <TextGenerateEffect words={text} />
    </div>
  );
}
