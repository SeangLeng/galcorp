'use client';

import { Button, Input, Textarea } from '@nextui-org/react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { IoMdSend } from 'react-icons/io';

export default function ContactUs({ image, imageClassname }: { imageClassname: string | undefined, image: string | StaticImport }) {
  const inputStyle = 'rounded-full bg-white shadow-md px-5 focus:border';
  return (
    <section className='py-20 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1'>
      <Image src={image} alt='image-contactus' className={imageClassname} />
      <div id='form' className='flex flex-col gap-4'>
        <p className='text-4xl font-bold text-green-color'>Contact us</p>
        <p className='text-lg text-text-color'>House #A16E0E1, Group #4, Tumnorp Village, Songkat Phnom Penh Thmey, Khan Sen Sok, Phnom Penh, Cambodia</p>
        <Input size='lg' classNames={{
          inputWrapper: inputStyle
        }} variant='flat' placeholder='First name' type='text' />
        <Input size='lg' variant='flat' placeholder='Subject' type='text' classNames={{
          inputWrapper: inputStyle
        }} />
        <Input size='lg' variant='flat' placeholder='Email' type='email' classNames={{
          inputWrapper: inputStyle
        }} />
        <Textarea size='lg' variant='flat' placeholder='Message ...' classNames={{
          inputWrapper: 'rounded-xl bg-gray-200 px-5 shadow-md'
        }} />
        <Link href={'/qrcode'} target='_blank' className='hover:underline underline-offset-4'>Or <span className='text-blue-color font-semibold'>QRCODE</span></Link>
        <Button type='submit' className='rounded-full text-lg text-white bg-green-color flex justify-center items-center gap-5' size='lg'>Send Message <IoMdSend /> </Button>
      </div>
    </section>
  )
}
