import React from 'react';
import Link from 'next/link';

const BlogPostPage = ({params}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
    <div>BlogPostPage</div>
    <p>::params.slug:: {params.slug}</p>
    <Link href='/' className='text-blue-600 font-medium hover:font-bold'>Home Page</Link>
    </div>
  )
}

export default BlogPostPage