"use client";
import { TextGenerateEffect } from "@/ui/text-generate-effect";

export function TextGenerateEffectDemo({ text, classnameProps }: { text: string, classnameProps?: string }) {
  return (
    <div>
      <TextGenerateEffect words={text} className={classnameProps} />
    </div>
  );
}
