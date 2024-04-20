'use client';

import ButtonGreen from '@/components/button/ButtonGreen';
import { ServiceProps, Services } from '@/constants/services';
import { SERVICES } from '@/utils/Routes';
import { Spinner } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import notfound from '@public/assets/images/404 Error-rafiki.svg';

export default function SeriveById({ params }: { params: { id: string } }) {
  const [service, setService] = useState<ServiceProps | undefined>(undefined);
  const [displayedServices, setDisplayedServices] = useState<ServiceProps[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const filteredService = Services.find(item => item.id === parseInt(params.id));
    const randomStartIndex = Math.floor(Math.random() * 10);
    const slicedServices = Services.slice(randomStartIndex, randomStartIndex + 3);
    setDisplayedServices(slicedServices);

    if (filteredService) {
      setService(filteredService);
    } else {
      setService(undefined);
    }
    setLoading(false);
  }, [params.id]);

  return loading ? (
    <div className='flex justify-center items-center' >
      <Spinner size='md' label="loading" />
    </div>
  ) : service ? (
    <section className='grid md:grid-cols-2 grid-cols-1 gap-10'>
      <div className='w-full'>
        <div className='grid gap-5'>
          <Image src={service.image} alt={service.label} className='md:min-h-[562px] w-full object-cover rounded-2xl' />
          <div className={'md:grid hidden gap-5 '}>
            <p className={'text-lg font-semibold text-text-color'}>Other services: </p>
            <div className='grid lg:grid-cols-3 grid-cols-2 gap-4'>
              {
                displayedServices?.map(item => (
                  <Link href={`${SERVICES}/${item.id}`} className="group relative rounded-2xl w-full h-full" key={item.id}>
                    <Image src={item.image} alt={item.label} className="w-full h-full object-cover rounded-2xl group-hover:opacity-50 bg-black transition-opacity duration-300" />
                    <div className="absolute hover:ring-2 ring-green-color inset-0 bg-black/70 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 flex items-center justify-center text-center">
                      <span className="text-primary-color text-lg group-hover:opacity-100">{item.label}</span>
                    </div>
                  </Link>
                ))
              }
            </div>
            <ButtonGreen content='see More service' showIcon={false} url={SERVICES} size='md' classname='uppercase' />
          </div>
        </div>
      </div>
      <div id='content'>
        <h1 className='text-bold text-text-color font-bold'>{service?.label}</h1>
        {service && service.content && (
          <div
            id="html-content"
            className="w-full text-color md:text-lg text-base mt-5"
            dangerouslySetInnerHTML={{ __html: service?.content }}
          />
        )}
      </div>
      <div className={'md:hidden grid gap-5 '}>
        <p className={'text-lg font-semibold text-text-color'}>Other services: </p>
        <div className='grid lg:grid-cols-3 grid-cols-2 gap-4'>
          {
            displayedServices?.map(item => (
              <Link href={`${SERVICES}/${item.id}`} className="group relative rounded-2xl w-full h-full" key={item.id}>
                <Image src={item.image} alt={item.label} className="w-full h-full object-cover rounded-2xl group-hover:opacity-50 bg-black transition-opacity duration-300" />
                <div className="absolute hover:ring-2 ring-green-color inset-0 bg-black/70 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 flex items-center justify-center text-center">
                  <span className="text-primary-color text-lg group-hover:opacity-100">{item.label}</span>
                </div>
              </Link>
            ))
          }
        </div>
        <ButtonGreen content='see More service' showIcon={false} url={SERVICES} size='md' classname='uppercase' />
      </div>
    </section>
  ) : (
    <div className='flex flex-col justify-center items-center'>
      <p className='text-3xl font-semibold animate-bounce text-center'>Oops! Service not found</p>
      <Image src={notfound} alt='not found' />
      <ButtonGreen content='Our services' showIcon={false} url={SERVICES} size='md' classname='uppercase' />
    </div>
  )
}


