import Link from 'next/link';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center  m-4 text-[20px] font-bold bg-blue-400 ' >
     <Header />
      <p className='text-blue-600 font-medium hover:font-bold' ><a href='/pages/about'>About us</a></p>
      <Link href='/pages/contact' className='text-blue-600 font-medium hover:font-bold'>Contact Us</Link>
    </div>
  );
}
