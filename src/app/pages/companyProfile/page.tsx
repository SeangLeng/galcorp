import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import container from '@public/assets/images/container-profile.svg';
import logo from '@public/assets/images/logo.png';
import response from '@public/assets/images/pointing-contract_1098-12995.jpg';
import Customer from '@public/assets/images/6186570.jpg';
import service3 from '@public/assets/images/_a8970e79-2bdf-4626-a9d4-29fb4c90a657.jpeg';
import email from '@public/assets/images/Gmail_icon_(2020).svg.webp';
import phone from '@public/assets/images/png-clipart-telephone-logo-iphone-telephone-call-smartphone-phone-electronics-text-thumbnail.png';
import web from '@public/assets/images/logo-website-website-icon-with-png-and-vector-format-for-unlimited-22.png';
import ButtonGreen from '@/components/button/ButtonGreen';
import { CONTACTUS } from '@/utils/Routes';

export default function CompanyProfile() {
  return (
    <section>
      <Image className='m-auto' src={container} alt='container' />
      <div className='py-16'>
        <h1 className='text-center font-bold text-text-color'>Company profile</h1>
        <p className='text-center text-gray-600 md:text-lg text-base py-4'>Since 2000, Goods Agency Logistics Ltd participated and contributed to the nation by creating job for our people and we served the services of freight and logistics to the non-commercial, commercial and industrial sectors in Cambodia.</p>
        <Image src={logo} className='w-2/3 m-auto drop-shadow-lg' alt='logo-galcorps' />
      </div>
      <div className='py-10'>
        <h2 className='text-text-color font-bold text-center uppercase'>Our RESPONSIBILITIES</h2>
        <div className='relative py-10'>
          <Image src={response} alt='image-response' className='h-[627px] w-full object-cover rounded-2xl brightness-50' />
          <div className='z-20 text-white absolute p-10 top-0 inset-0 flex flex-col justify-center items-center'>
            <h2 className='font-semibold'>1. Documentation and Communication</h2>
            <ul className='list-disc md:text-xl ml-10 md:ml-16 text-medium leading-loose'>
              <li>Co-ordinate with overseas agents on import document</li>
              <li>Submit document to shipping companies</li>
              <li>Prepare arrival notice and send it to clients</li>
              <li>Take care of all inbound activities</li>
              <li>Report to Manager on inbound activities</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h2 className='font-bold text-text-color'>2. Customer Service and Coordination</h2>
        <div className='py-10 gap-10 grid grid-cols-1 md:grid-cols-2'>
          <ul className='list-disc ml-10 md:text-lg text-base'>
            <li>Once receive inbound pre-alert, preparing all other necessary document to provide to all concerned parties</li>
            <li>Take care inbound customers & provide customers services to all inbound clients</li>
            <li>Provide all necessary information to customers</li>
            <li>Reach out to customers on our inbound services</li>
          </ul>
          <Image className='md:w-3/4 rounded-2xl m-auto' src={Customer} alt='Customer Service and Coordination' />
        </div>
      </div>
      <div className='py-10'>
        <h2 className='font-bold text-text-color'>3. Reporting and Accounting</h2>
        <div className='grid gap-10 justify-center items-center grid-cols-1 md:grid-cols-2 py-16'>
          <Image src={service3} alt='service-3' className='lg:w-3/5 md:w-2/3 w-full m-auto rounded-2xl' />
          <p className='text-4xl font-semibold md:text-wrap text-center'>Co-ordinate with accountant on inbound accounting issue</p>
        </div>
      </div>
      <div id='interesting-part'>
        <div className='grid gap-20 justify-center items-center text-center'>
          <p className='text-5xl font-bold text-text-color'>Interesting ?</p>
          <div>
            <p className='font-semibold text-xl'>Ms. Palsak Samnang</p>
            <div className='flex gap-5 justify-center items-center mt-4'>
              <Link href={'#'}>
                <Image src={email} alt='email' className='w-[50px]' />
              </Link>
              <Link href={'#'}>
                <Image src={phone} alt='phone' className='w-[50px]' />
              </Link>
              <Link href={'#'}>
                <Image src={web} alt='web' className='w-[50px]' />
              </Link>
            </div>
          </div>
          <ButtonGreen content='Contact to us' size='lg' url={CONTACTUS} showIcon={false} />
        </div>
      </div>
    </section>
  )
}
