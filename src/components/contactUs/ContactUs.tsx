'use client';

import { QRCODE } from '@/utils/Routes';
import { Button, Input, Textarea } from '@nextui-org/react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';
import React, { FormEvent, useRef, useState } from 'react'
import { IoMdSend } from 'react-icons/io';
import emailjs from '@emailjs/browser';
import { message } from 'antd';
import { emailjsProps } from '@/constants/emailJs.service';

export default function ContactUs({ image, imageClassname }: { imageClassname?: string | undefined, image: string | StaticImport }) {
  const inputStyle = 'rounded-full bg-white shadow-md px-5 focus:border';
  const form = useRef<HTMLFormElement>(null);
  const [check, setCheck] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const validateForm = (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const username = formData.get('from_name');
    const email = formData.get('email');
    const messages = formData.get('message');
    const subject = formData.get('subject');

    if (!username || !email || !messages || !subject) {
      message.error("Please fill all the fields to contact to us");
      event.preventDefault();
      setCheck(false);
    } else {
      setCheck(true);
    }
  };

  const handleSendEmail = (event: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    validateForm(event);
    if (form.current && check) {
      emailjs
        .sendForm(emailjsProps.serviceid, emailjsProps.templateId, form.current, emailjsProps.publickey)
        .then(
          () => {
            message.success("Your email has send to us successfully");
          },
          (error) => {
            message.success("Sorry something went wrong with your email");
          },
        );
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <section className='py-20 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10'>
      <Image src={image} alt='image-contactus' className={imageClassname} />
      <div id='form' className='flex flex-col gap-4'>
        <p className='text-4xl font-bold text-green-color'>Contact us</p>
        <p className='text-lg text-text-color'>House #A16E0E1, Group #4, Tumnorp Village, Songkat Phnom Penh Thmey, Khan Sen Sok, Phnom Penh, Cambodia</p>
        <form className='flex flex-col gap-4' ref={form} onSubmit={handleSendEmail} action="">
          <Input name='from_name' size='lg' classNames={{
            inputWrapper: inputStyle
          }} variant='flat' placeholder='First name' type='text' />
          <Input name='subject' size='lg' variant='flat' placeholder='Subject' type='text' classNames={{
            inputWrapper: inputStyle
          }} />
          <Input name='email' size='lg' variant='flat' placeholder='Email' type='email' classNames={{
            inputWrapper: inputStyle
          }} />
          <Textarea name='message' size='lg' variant='flat' placeholder='Message ...' classNames={{
            inputWrapper: 'rounded-xl bg-gray-200 px-5 shadow-md'
          }} />
          <Link href={QRCODE} target='_blank' className='hover:underline underline-offset-4'>Or <span className='text-blue-color font-semibold'>QRCODE</span></Link>
          <Button spinner={
            <svg
              className="animate-spin h-5 w-5 text-current"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                fill="currentColor"
              />
            </svg>
          } isLoading={loading} type='submit' className='rounded-full text-lg text-white bg-green-color flex justify-center items-center gap-5' size='lg'>Send Message <IoMdSend /> </Button>
        </form>
      </div>
    </section>
  )
}
