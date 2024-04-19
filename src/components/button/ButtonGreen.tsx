'use client';

import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { IoIosArrowDroprightCircle } from 'react-icons/io';

export default function ButtonGreen({ url, size, content, showIcon }: { content: string, url: string, size: 'lg' | 'md' | 'sm', showIcon: boolean }) {
  const router = useRouter();
  const handleRoute = () => {
    router.push(url);
  }
  return (
    <Button size={size} className='rounded-full gap-4 hover:gap-6 transition-all text-lg text-primary-color font-medium flex justify-center items-center bg-green-color' variant='solid' onClick={handleRoute}>
      {showIcon && <IoIosArrowDroprightCircle size={25} />}{content}
    </Button>
  )
}
