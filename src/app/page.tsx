import Image from "next/image";
import { GoContainer } from "react-icons/go";

import container from '@public/assets/images/main-container.png'
import { FaUserFriends } from "react-icons/fa";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";

import ButtonGreen from "@/components/button/ButtonGreen";
import { CardHoverEffectDemo } from "@/components/cards/AboutusCards";
import ButtonServices from "@/components/button/ButtonServices";
import { Services } from "@/constants/services";
import ContactUs from "@/components/contactUs/ContactUs";
import truck from "@public/assets/images/3d-truck-removebg-preview.png";
import { TextGenerateEffectDemo } from "@/components/typingSmooth/TextGenerateEffect";
import { ABOUT } from "@/utils/Routes";

export default function App() {
  return (
    <main>
      <h1 className="font-bold text-text-color lg:w-4/5 md:w-5/6 w-full">Welcome to <span className="text-red-color">Gal</span> <span className="text-green-color">Logistic</span> International Freight Forwarder </h1>
      <section className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
        <div className="mt-5">
          <div id="description" className="text-lg text-text-color">
            <TextGenerateEffectDemo text="Gal is the ideal international freight forwarder to suit your freight and logistics needs. We have local knowledge and plus international market experiences since year 2000, now more than a decade of commitment to serve our clients." />
          </div>
          <div className="lg:w-3/4 md:w-full w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-start items-center gap-8 mt-10">
            <div className="hover:ring-2 rounded-2xl flex cursor-pointer justify-center items-center gap-5 p-3 transition-all shadow-md">
              <GoContainer size={40} color="#598C6E" />
              <div>
                <p className="text-4xl font-bold text-green-color">
                  5000+
                </p>
                <p className="font-medium">Shipment per year</p>
              </div>
            </div>
            <div className="hover:ring-2 hover:ring-blue-color rounded-2xl cursor-pointer flex justify-center items-center gap-5 p-3 transition-all shadow-md">
              <FaUserFriends size={40} color="#2E88CA" />
              <div>
                <p className="text-4xl font-bold text-blue-color">
                  1000+
                </p>
                <p className="font-medium">Costumers</p>
              </div>
            </div>
          </div>
          <Link href={'#'} className="flex gap-3 hover:text-red-color text-blue-color font-medium text-lg hover:gap-5 transition-all justify-start items-center mt-5">More about Gal <IoMdArrowForward /></Link>
        </div>
        <Image src={container} alt="container-homepage" className="w-full rotate-1 hover:scale-105 hover:rotate-0 transition-all" />
      </section>
      <section className="py-20">
        <h2 className="text-center mt-10 font-bold uppercase text-text-color">Our Operational Scope</h2>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mt-20 gap-20">
          <CardHoverEffectDemo />
          <div className="mt-10">
            <p className="text-3xl mb-5 font-semibold">About Galcop</p>
            <p className="text-lg">Since 2000, we have been offering our services to the non-commercial, commercial and industrial sectors in Cambodia. We are a garment handling specialist offering many services ideally suited to the garment industry and other businesses in Cambodia and internationally.</p>
            <div className="mt-7">
              <ButtonGreen showIcon={true} content="Learn more" url={ABOUT} size="md" key={'about-gal'} />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 grid gap-5 lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
        <div>
          <h2 className="font-bold text-text-color">Appreciation</h2>
          <p className="text-text-color mt-5 text-lg">With our sincere services and effort, our partners and clients has proof us of their appreciation and we wish to say Thanks to our partners in shipping industry and special Thanks to all our respected clients and partners worldwide.</p>
          <div className="mt-7">
            <ButtonGreen showIcon={true} content="Learn more" url="https://youtu.be/NltXHT06xGk?si=kHzsFAymP63ULVd7" size="md" />
          </div>
        </div>
        <iframe className="w-full h-[315px] rounded-xl" src="https://www.youtube.com/embed/NltXHT06xGk?si=QtDh5cw06LyxyKPL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </section>
      <section className="py-10">
        <h2 className="font-bold text-text-color">Discover Our Comprehensive Range of Services</h2>
        <p className="text-described-color text-lg">Gain insights from our experienced consultants who can guide you through strategic planning, market analysis, and business development</p>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-10 mt-10">
          <div className="flex flex-col gap-3">
            {
              Services.slice(0, 5).map(service => (
                <ButtonServices label={service.label} url={`/service/${service.id}`} key={service.id} />
              ))
            }
            <ButtonGreen showIcon={false} content="More service" url="/services" size="md" />
          </div>
          <div className="md:col-start-2 md:col-span-2 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-4">
            {
              Services.slice(0, 6).map(item => (
                <Link href={`/service/${item.id}`} className="group relative rounded-2xl w-full h-full" key={item.id}>
                  <Image src={item.image} alt={item.label} className="w-full h-full object-cover rounded-2xl group-hover:opacity-50 bg-black transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 flex items-center justify-center text-center">
                    <span className="text-primary-color text-lg group-hover:opacity-100">{item.label}</span>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </section>
      <ContactUs image={truck} imageClassname="rotate-12 scale-x-[-1] hidden md:block m-auto" />
    </main>
  );
}
