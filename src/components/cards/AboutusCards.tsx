'use client';

import Image from "next/image";
import logo from '@public/assets/images/logo.png';
import warehose from '@public/assets/images/warehouse-service1.jpg';
import ship from '@public/assets/images/aerial-view-container-cargo-ship-sea.jpg';
import container from '@public/assets/images/industrial-port-container-yard.jpg';

export function CardHoverEffectDemo() {
  return (
    <div className="grid grid-cols-2 gap-5 object-fill">
      <Image src={logo} alt="logo" className="m-auto hover:outline-2 hover:outline-gray-400" />
      <Image src={warehose} alt="logo" className="object-cover w-full h-full rounded-xl hover:outline-2 hover:outline-gray-400" />
      <Image src={ship} alt="logo" className="object-cover w-full h-full rounded-xl hover:outline-2 hover:outline-gray-400" />
      <Image src={container} alt="logo" className="object-cover w-full h-full rounded-xl hover:outline-2 hover:outline-gray-400" />
    </div>
  );
}