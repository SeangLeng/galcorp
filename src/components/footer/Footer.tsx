import { RelatedWeb, SocailLink } from '@/constants/relatedWeb'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer id='footer' className='bg-text-color text-primary-color py-5'>
      <div className='container px-4 grid gap-5'>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 container px-4 gap-10'>
          <div className='grid gap-5' id='section-1'>
            <div>
              <h3 className='font-medium'>Goods Agency Logistics Ltd</h3>
              <p>House# A16E0E1, Group# 4, Tumnorp Village, Sangkat Phnom Penh Thmey, Khan Sen Sok, Phnom Penh Capital, Cambodia</p>
            </div>
            <div>
              <h3 className='font-medium'>Ms Samnang Pal</h3>
              <p>Email: general@gal-corp.com</p>
              <p>operations@gal-corp.com</p>
              <p>Back-up Email: veasnabush@gmail.com</p>
            </div>
            <div>
              <h3 className='font-medium'>Email: </h3>
              <p>info@gal-corp.com</p>
              <p>account@gal-corp.com</p>
            </div>
          </div>
          <div id='section-2'>
            <h3 className='font-medium'>Related website:</h3>
            <ul className='leading-loose'>
              {
                RelatedWeb.map(item => (
                  <li className='list-disc ml-8' key={item.id}>
                    <Link className='hover:underline underline-offset-2' href={item.route} target='_blank'>{item.label}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <div id='section-3' className='flex gap-5 justify-end'>
          {
            SocailLink.map(item => (
              <Link target='_blank' className='hover:scale-110 transition-all' key={item.id} href={item.route}>
                <item.icon size={30} />
              </Link>
            ))
          }
        </div>
      </div>
    </footer>
  )
}
