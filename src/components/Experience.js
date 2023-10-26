import React, { useRef } from 'react'
import {motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address, work}) => {
   const ref = useRef(null);
 
    return(
     <li ref={ref} className='my-10 first:mt-0 last:mb-0 w-[60%] mx-auto flex 
     flex-col items-center justify-between md:w-[80%]'>
        
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg' >
                {position}&nbsp; 
                <a 
                 href={companyLink}
                 target='_blank'
                 className='text-iris capitalize'
            >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md-text-sm'>
            {work}
            </p>
        </motion.div>
    </li>
)
}


const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center
         md:text-6xl xs:text-4xl md:mb-16'>
        Experience
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

<motion.div 
style={{scaleY: scrollYProgress}}
className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top
md:w-[2px] md:left-[30px] xs:left-[20px]'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                
                <Details
                position='System Engineer' company='Tata Consultancy Services' 
                companyLink='https://tcs.com/'
                time='2021-2023' address='Mumbai, India'
                work='Resolved database-related concerns for the efficient operation of 25,000 branches.
                Designing, managing, and maintaining tools to automate operational processes.
                Development of complex applications using object-oriented Perl, Python and C++.
                Participating in the building of the tools and processes to support the infrastructure.
                Implemented Encryption and Decryption in C and Java language.
                To maintain data privacy, a structure was implemented in which personal confidential data in reports is substituted with their respective reference numbers.'
                />
              
                <Details
                position='Assistant System Engieer' company='Tata Consultancy Services' 
                companyLink='https://tcs.com/'
                time='2020-2021' address='Mumbai, India'
                work='Crafted shell scripts to automate job processes.Engineered Python scripts for the
                    seamless distribution of reports to branches.Implemented Pro*C code to execute CRUD operations.
                    Devised PL/SQL code to define intricate business rules and validation checks, 
                    guaranteeing data integrity and enforcing constraints within the database.'
    
                />
            </ul>
        </div>
    </div>
  )
}

export default Experience