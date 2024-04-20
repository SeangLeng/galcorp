'use client';

import Image from 'next/image'
import React from 'react'
import { Button } from '@nextui-org/react';
import { MdElectricalServices } from 'react-icons/md';

import { TextGenerateEffectDemo } from '@/components/typingSmooth/TextGenerateEffect';
import { AboutUsContents } from '@/constants/aboutus';

import truck from '@public/assets/images/container-truck-ship-port-ai-generated-image.jpg';
import presidentCard from '@public/assets/images/boss_card.jpg';
import appri_1 from '@public/assets/images/77271-appreciation3.jpg';
import appri_2 from '@public/assets/images/36155-appreciation2.jpg';
import appri_3 from '@public/assets/images/14363-appreciation1.jpg';
import { useRouter } from 'next/navigation';
import { SERVICES } from '@/utils/Routes';

export default function AboutUs() {
  const router = useRouter();
  return (
    <section id='about-us'>
      <div id='intro'>
        <Image src={truck} alt='truck' className='absolute inset-0 z-0 top-0 right-0 h-[700px] object-cover brightness-50' />
        <div className='sticky text-white z-10 mt-10 flex flex-col justify-center items-center mb-56'>
          <h1 className='text-white font-bold'>About us</h1>
          <div className='md:w-2/3 text-center'>
            <TextGenerateEffectDemo classnameProps='text-white md:text-lg text-sm' text='Since 2000, we have provided services to various sectors in Cambodia, specializing in garment handling. Our expertise and proactive approach have established us as industry leaders in performance and customer satisfaction. We offer a wide range of services tailored to meet your needs ensuring success in achieving your goals We handle all aspects of transportation with integrity.' />
          </div>
          <Button onClick={() => router.push(SERVICES)} size='lg' className='backdrop-blur-sm bg-white/20 hover:ring-2 ring-white transition-all text-white font-semibold text-lg rounded-full mt-10'>Our services <MdElectricalServices /></Button>
        </div>
      </div>
      <div id='presedent-card'>
        <h2 className='text-text-color font-bold'>President Messages</h2>
        <Image src={presidentCard} alt='president-card' className='mt-10 w-full md:w-2/3 rounded-2xl hover:drop-shadow-md transition-all' />
      </div>
      <div className='py-10'>
        {
          AboutUsContents.map((item, index) => (
            <div key={item.id} className={`py-10`}>
              <h2 className='font-bold text-text-color'>{item.header}</h2>
              <div className='mt-10 grid md:grid-cols-2 grid-cols-1 gap-10 justify-center items-center'>
                <p className={`text-lg ${item.id % 2 === 0 && 'order-last'}`}>{item.content}</p>
                <Image src={item.imageUrl} alt='Corporate Responsibility and Company Values' className='rounded-2xl hover:drop-shadow-md transition-all' />
              </div>
            </div>
          ))
        }
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-center font-bold text-text-color'>Appreciation</h2>
        <p className='text-center text-gray-400 text-sm md:text-lg'>With our sincere services and effort, our partners and clients has proof us of their appreciation and we wish to say Thanks to our partners in shipping industry and special Thanks to all our respected clients and partners worldwide.</p>
        <div className='py-10 grid md:grid-cols-2 grid-cols-1 md:w-2/3 gap-5'>
          <Image src={appri_1} alt={'appri_1'} />
          <Image src={appri_2} alt={'appri_2'} />
          <div className='md:row-start-2 md:col-span-2'>
            <Image src={appri_3} alt={'appri_3'} className='w-full' />
          </div>
        </div>
      </div>
    </section>
  )
}
