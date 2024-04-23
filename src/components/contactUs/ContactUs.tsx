'use client';

import { QRCODE } from '@/utils/Routes';
import { Button, Input, Textarea } from '@nextui-org/react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';
import React, { FormEvent, useRef, useState } from 'react'
import { IoMdSend } from 'react-icons/io';
import emailjs from '@emailjs/browser';
import { message, Modal } from 'antd';
import { emailjsProps } from '@/constants/emailJs.service';
import { SocailLink } from '@/constants/relatedWeb';
import ButtonGreen from '../button/ButtonGreen';
import { MdAttachEmail, MdEmail, MdMarkEmailRead } from 'react-icons/md';

export default function ContactUs({ image, imageClassname }: { imageClassname?: string | undefined, image: string | StaticImport }) {
  return (
    <section id='contactus' className='py-16 grid justify-center items-center lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10'>
      <Image src={image} alt='image-contactus' className={imageClassname} />
      <div id='form' className='flex flex-col gap-4'>
        <p className='text-4xl font-bold text-green-color'>Contact us</p>
        <p className='text-lg text-text-color'>House #A16E0E1, Group #4, Tumnorp Village, Songkat Phnom Penh Thmey, Khan Sen Sok, Phnom Penh, Cambodia</p>
        <div className='text-lg'>
          <h3 className='text-green-color font-medium'>Mr. Bush Pal</h3>
          <div className='grid gap-2'>
            <p className='flex gap-3 justify-start items-center'><MdAttachEmail size={30} className='text-gray-600' /> <a href="mailto:general@gal-corp.com">general@gal-corp.com</a></p>
            <p className='flex gap-3 justify-start items-center'><MdMarkEmailRead size={30} className='text-gray-600' /> <a href="mailto:operations@gal-corp.com">operations@gal-corp.com</a></p>
            <p className='flex gap-3 justify-start items-center'><MdEmail size={30} className='text-gray-600' /><a href="mailto: veasnabush@gmail.com"> veasnabush@gmail.com (Backup email)</a></p>
          </div>
        </div>
        <ButtonGreen classname='mt-5' content='Email to operations@gal-corp.com' size='md' url='mailto:operations@gal-corp.com' showIcon={false} />
      </div>
    </section>
  )
}
