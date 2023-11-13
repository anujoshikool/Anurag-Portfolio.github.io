import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/Carpool.jpg"
import project2 from "../../public/images/projects/Shopping_Cart.jpg"
import project3 from "../../public/images/projects/Java_Encryption.webp"
import project4 from "../../public/images/projects/Local_Weather.jpg"
import project5 from "../../public/images/projects/Local_Weather.jpg"
import Image from 'next/image'
import {motion} from "framer-motion"
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image)
const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return(
        <article className='w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12
        lg:flex-col lg:p-8 xs:rounded-br-3xl xs:p-4'
        >
        <div className='shadow-lg absolute top-0 -right-3 -z-10 w-[101%] h-[103%] 
        rounded-[2.5rem] rounded-br-3xl bg-dark xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>


        <Link
         href={link} 
         target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg '
        >
            <FramerImage src={img} alt={title} className='w-full h-auto'
            whileHover={{scale:1.05}}
            transition={{duration:0.2}}
            priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
            
            />
        </Link>

        <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg-pl-0 lg:pt-6'>
            <span className='text-iris font-medium text-xl xs:text-base'>{type}</span>
            <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-sm'>{title}</h2>
            </Link>
            <p className='my-2 font-medium text-dark sm:text-sm'>{summary}</p>
            <div className='mt-2 flex items-center'>
             <Link href={github} target='_blank' className='w-10'> <GithubIcon/></Link>
             <Link href={github} target='_blank'
             className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
             sm:px-4 sm:text-base'
             >Visit Project</Link>
            </div>
        </div>
        </article>
    )
}


const Project = ({title, type, img, link, github}) => {
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative xs:p-4
        '>
        <div className='shadow-lg absolute top-0 -right-3 -z-10 w-[101%] h-[103%] 
        rounded-[2rem] rounded-br-3xl bg-dark md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>

             <Link href={link} target='_blank'
        className='w-full cursor-pointer overflow-hidden rounded-lg'
        >
            <FramerImage src={img} alt={title} className='w-full h-auto'
            whileHover={{scale:1.05}}
            transition={{duration:0.2}}
            />
        </Link>

        <div className='w-full flex flex-col items-start justify-between mt-4'>
            <span className='text-iris font-medium text-xl lg:text-lg md:text-base'>
                {type}</span>
            <Link href={github} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
            </Link>
           
            <div className='w-full mt-2 flex items-center justify-between'>
            <Link 
             href={github} 
             target='_blank'
             className='text-lg font-semibold underline md:text-base'
             >Visit </Link>
             <Link href={github} target='_blank' className='w-8 md:w-6'> <GithubIcon/></Link>
             
            </div>
        </div>
        </article>
    )
}


const projects = () => {
  return (
    <>
        <Head>
        <title> Anurag Joshi| Projects Page</title>
        <meta name='description' content='any description'/>
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text="Check Out My Projects!"
                className='mt-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'                
                />

                <div className='grid grid-cols-12 gap-24 gap-y-32 mt-16 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                        <FeaturedProject
                        title="Clark Carpool"    
                        img={project1}
                        summary="I've built a Carpoolig App for Clark Students as a project, a platform with technologies 
                        such as CSS,HTML,Django."

                        link="https://github.com/anujoshikool/Clark-Carpool"
                        github="https://github.com/anujoshikool/Clark-Carpool" 
                        type="Featured Project"                 
                                        
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project
                        title="Shopping Cart"    
                        img={project2}
                        summary="Designed a Shopping Cart using react"  
                        link="https://github.com/anujoshikool/basic-react-shoppig-cart"
                        github="https://github.com/anujoshikool/basic-react-shoppig-cart" 
                        type="Project"                 
                                        
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project
                        title="Weather App"    
                        img={project5}
                        summary="I've created a weather application from the ground up, providing real-time weather information
     and forecasts, ensuring users stay informed about current conditions with a user-friendly interface and real time data."  
                        link="/"
                        github="/" 
                        type="Featured Project"                 
                                        
                        />
                    </div>
                    {/*
                    <div className='col-span-12 '>
                    <FeaturedProject
                        title="E-Commerce Application"    
                        img={project1}
                        summary="I've built end to end E-comm project, a cutting-edge multi-vendor ecommerce platform utilizing the MERN stack,
    complemented by the latest technologies such as Tailwind CSS, Socket.io, Redux Toolkit, and more, delivering a seamless online shopping experience."  
                        link="/"
                        github="/" 
                        type="Featured Project"                 
                                        
                        />
                    </div>
                    */}
                    <div className='col-span-6 sm:col-span-12'>
                    <Project
                        title="Encryption of Data"    
                        img={project3}
                        summary="Data is Encrypted and decrypted using Public an Private keys asymmetric type encryption for data privacy."  
                        link="https://github.com/anujoshikool/Java-Encryption"
                        github="https://github.com/anujoshikool/Java-Encryption" 
                        type="Project"                 
                                        
                        />
                    </div>
                    {/*
                    <div className='col-span-6 sm:col-span-12'>
                    <Project
                        title="Weather App"    
                        img={project4}
                        summary="I've created a weather application from the ground up, providing real-time weather information
    and forecasts, ensuring users stay informed about current conditions with a user-friendly interface and real time data"  
                        link="/"
                        github="/" 
                        type="Featured Project"                 
                                        
                        />
                    </div>
                */}
                </div>
            </Layout>
        </main>


    </>
  )
}

export default projects