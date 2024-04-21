import ButtonGreen from '@/components/button/ButtonGreen'
import { Services } from '@/constants/services'
import { SERVICES } from '@/utils/Routes'
import Image from 'next/image'
import React from 'react'

export default function AllServices() {
  return (
    <section>
      <h1 className='text-content3-foreground md:text-3xl text-2xl font-bold'>Trust us for reliable and efficient logistics solutions. We prioritize your satisfaction and ensure safe, on-time delivery every step of the way.</h1>
      <section className='py-10'>
        {
          Services.map((service) => (
            <div key={service.id} className='grid md:grid-cols-2 grid-cols-1 gap-10 py-20'>
              <Image src={service.image} alt={service.label} className={`rounded-2xl w-full md:h-[562px] object-cover ${(service.id % 2) === 0 && 'md:order-2'}`} />
              <div className='flex flex-col gap-5 mt-5'>
                <p className='font-semibold md:text-3xl text-xl text-text-color'>{service.label}</p>
                <p className='text-text-color md:text-lg text-base'>{service.description}</p>
                <ButtonGreen classname="md:w-fit w-full" size='md' showIcon={true} content='Learn more' url={`${SERVICES}/${service.id}`} />
              </div>
            </div>
          ))
        }
      </section>
    </section>
  )
}
