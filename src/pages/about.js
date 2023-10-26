import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import AnimatedText from '../components/AnimatedText'
import Layout from '../components/Layout'
import profilePic from "../../public/images/profile/Profile_Pic.jpg"
import Image from 'next/image'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({value}) =>{
const ref = useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, {duration: 3000})
const isInView = useInView(ref, {once:true});

useEffect(()=> {
  if(isInView){
    motionValue.set(value)
  }
}, [isInView, value, motionValue])

useEffect(() => {
  springValue.on("change", (latest) => {
    if(ref.current && latest.toFixed(0) <= value){
      ref.current.textContent = latest.toFixed(0);
    }
  })
}, [springValue, value])


  return <span ref={ref}></span>
}


const about = () => {
  return (
    <>
    <Head>
        <title>Anurag Joshi | About Page</title>
        <meta name='description' content='any description'/>
    </Head>
    <TransitionEffect />
    <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
            <AnimatedText text="Learning Transforms into Real Work!" 
            className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
            <div className='grid w-full grid-cols-8 mt-16 gap-16 sm:gap-8'>
              <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                <h2 className='mb-4 text-lg font-bold text-dark/75'>
                  Unveiling My Unique Journey</h2>
                <p className='font-medium'>
                Hi, I'm Anurag Joshi, a Software Engineering Masters Student at Clark University looking for Internship in Summer 2024
  with a dynamic background I've cultivated a diverse skill set that sets me apart. I'm passionate about tackling critical, 
  innovative challenges and using my skill set to solve real-world problems.
                </p>
          
                <p className='font-medium my-4'>
                As you explore my portfolio and learn more about my academic and personal projects, I hope you'll catch a glimpse 
                of my passion and dedication. I'm excited to connect with like-minded individuals, collaborate on exciting ventures,
                and continue this incredible journey of growth and discovery in the world of software engineering.
                </p>

                <p className='font-medium'>
                  Thank you for visiting my website, and I look forward to the opportunities to contribute my skills and passion 
                  to your upcoming projects.
                </p>
              </div >
              <div className=' col-span-3 relative h-max rounded-2xl border-4 border-solid border-dark
              bg-light p-8 xl:col-span-4 md:order-1 md:col-span-8
              '>
                <div className='shadow-lg absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'/>
                  <Image 
                  src={profilePic} 
                  alt="Anurag Joshi" className='w-full h-auto rounded-2xl'
                  priority
                  sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"/>             
                </div> 
                <div className='col-span-2 flex flex-col items-end justify-evenly	 xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                  <div className='flex flex-col items-end justify-center xl:items-center'>
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                      <AnimatedNumbers value={5}/>+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 xl:text-center
                     md:text-lg sm:text-base xs:text-sm'>
                      Projects Completed</h2>
                  </div>
                  
                  <div className='flex flex-col items-end justify-center xl:items-center'>
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                    <AnimatedNumbers value={3}/>+
                    </span>
                    
                    <h2 className='text-xl font-medium capitalize text-dark/75
                    md:text-lg sm:text-base xs:text-sm'>
                      Years of Experience</h2>
                    </div>
                  
                  {/*
                  <div className='flex flex-col items-end justify-center xl:items-center'>
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                    <AnimatedNumbers value={3}/>+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75
                    md:text-lg sm:text-base xs:text-sm'>
                      Years of Experience</h2>
                  </div>
                 */}
                </div>
            </div> 

            <Skills />
            <Experience/>
            <Education/>
        </Layout>
    </main>

    </>
  )
}

export default about