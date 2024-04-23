'use client';

import CountUp from 'react-countup'

export default function CountUpNumber({ number }: { number: number }) {
  return (
    <CountUp end={number} duration={3} />
  )
}
