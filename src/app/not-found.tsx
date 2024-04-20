import Link from 'next/link';
import notfound from '@public/assets/images/404 Error-rafiki.svg';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='text-4xl font-bold text-green-800 animate-pulse'>Not Found</h2>
      <Image src={notfound} alt='not found' />
      <p className='text-xl text-gray-600 mt-4'>We Could not find requested resource</p>
      <Link href="/" className='text-green-color hover:text-green-700 transition-colors duration-200'>
        Return Home
      </Link>
    </div>
  );
}
