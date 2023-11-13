import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import ProfilePic from '../../public/images/profile/profile-picture-bg.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>
        <title>Anurag Joshi | Portfolio Page</title>
        <meta name="Anurag" content="Full Stack Developer" />
        
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center text-dark w-full min-h-screen lg:flex-col'>
            <div className='w-1/2 mr-6 md:w-full'>
              <Image src={ProfilePic} alt="Anurag Joshi" className='w-full h-auto lg:hidden md:inline-block md:w-full'
              priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Crafting code  from Syntax to Success." className='!text-3xl !text-left 
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl
              '/>
              
              <p className='flex items-center mt-10 justify-center text-dark font-bold'>
                Hi <span>&#128075;</span>, I am Anurag Joshi</p>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                I am a Master's student and budding Software Developer bringing ideas to life through imaginative web applications.
Dive into my portfolio to discover my latest projects, all reflecting my evolving expertise in software development.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/ANURAG_JOSHI_Res.pdf" target={"_blank"}
                className='flex items-center bg-black text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark 
                md:p-2 md:px-4 md:text-base'
                download={true}
                >Resume <LinkArrow className={"w-6 ml-1"}/>
                </Link>
                <Link href="mailto:anuragj1702@gmail.com" target={"_blank"}
                className='ml-4 text-lg font-medium capitalize text-dark underline 
                md:text-base'
                >Contact</Link>
              </div>
            </div>
          </div>
        </Layout>

        {/* <HireMe/> */}
      </main>
    </>
  )
}
