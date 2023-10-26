import React from 'react'
import Image from 'next/image';
import Circular1 from "../../public/images/svgs/Circular.svg"
import Link from 'next/link';


const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4
    flex items-center justify-center overflow-hidden
    '>
<div className='w-48 h-auto flex items-center justify-center relative'>
<Link href="mailto:anuragj1702@gmail.com"
    className='flex items-center'
                >
    </Link>
<Link href="mailto:anuragj1702@gmail.com" className='flex items-center justify-center
 left-1/2 top-1/2  bg-prof
text-light shadow-md border-solid border-dark w-20 h-20 rounded-full animate-spin-slow
font-semibold hover:bg-light hover:text-light
'>
    Hire Me
</Link>
</div>

    </div>
  )
}

export default HireMe