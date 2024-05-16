import React from 'react';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className='flex flex-col justify-center items-center m-4 text-[20px] bg-orange-300' >
    <h1>Contact page</h1>
    <Link href='/' className='text-blue-600 font-medium hover:font-bold'>Home Page</Link>
  </div>
  )
}

export default Contact