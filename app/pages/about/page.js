import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div className='flex flex-col justify-center items-center m-4 text-[20px] bg-slate-400' >
      <h1>Here is About page</h1>
      <Link href='/' className='text-blue-600 font-medium hover:font-bold'>Home Page</Link>

    </div>
  );
};

export default About;
