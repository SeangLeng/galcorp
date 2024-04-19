'use client';

import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { IoIosLink } from 'react-icons/io';

export default function ButtonServices({ url, label }: { url: string, label: string }) {
  const router = useRouter();
  const handleRoute = () => {
    router.push(url);
  }
  return (
    <Button variant='light' onClick={handleRoute} className='lg:text-lg w-full text-medium text-text-color rounded-full shadow-md flex justify-between items-center'>
      <p>{label}</p>
      <IoIosLink className='text-blue-color' size={20} />
    </Button>
  )
}
