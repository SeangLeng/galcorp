import ContactUs from '@/components/contactUs/ContactUs'
import React from 'react'

import contactusImage from '@public/assets/images/Mention-amico.png';

export default function ContactUsPage() {
  return (
    <section id='contact-us-page'>
      <ContactUs image={contactusImage} imageClassname='md:w-2/3 w-full m-auto'  />
    </section>
  )
}
