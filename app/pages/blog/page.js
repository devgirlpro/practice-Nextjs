import React from 'react';
import Link from 'next/link';

const BlogPage = () => {
  return (
    <main>
    <h1>Blog Page</h1>
    <p className='flex flex-col justify-center items-center'>
        <Link href='/pages/blog/post-1' className='hover:font-bold'>Post 1</Link>
        <Link href='/pages/blog/post-2' className='hover:font-bold '>Post 2</Link>
    </p>
    </main>
  )
}

export default BlogPage



