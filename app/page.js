import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center  m-4 text-[20px] font-bold bg-blue-400 ' >
      <h1>hello world from nextjs</h1>
      <p className='text-blue-600 font-medium hover:font-bold' ><a href='/pages/about'>About us</a></p>
      <Link href='/pages/contact' className='text-blue-600 font-medium hover:font-bold'>Contact Us</Link>
    </div>
  );
}
