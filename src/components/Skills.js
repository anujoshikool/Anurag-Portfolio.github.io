import React from 'react'
import {motion} from "framer-motion"

const Skill = ({name, x, y}) => {
    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold
         bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute
            lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:text-dark xs:font-bold'
            whileHover={{scale:1.05}}
            initial={{x:0, y:0}}
            whileInView={{x:x, y:y }}
            transition={ {duration: 1.5}}
            viewport={{once: true}}
            >
                {name}
            </motion.div>
    )
}

const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64  space-y-20 w-full text-center
        md:text-6xl md:mt-32'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full 
        bg-circularLight lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
        lg:bg-circularLightLg
        md:bg-circularLightMg
        sm:bg-circularLightSm
        '>
            
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
            p-8 shadow-dark cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2
            '
            whileHover={{scale:1.05}}
            >
                Tech
            </motion.div>

            <Skill name="Python " x="-24vw" y="2vw"/>
            <Skill name="Django " x="-24vw" y="-7vw"/>
            <Skill name="Perl " x="-18vw" y="9vw"/>
            <Skill name="Javascript " x="-5vw" y="-10vw"/>
            <Skill name="SQL " x="20vw" y="6vw"/>
            <Skill name="AWS " x="0vw" y="11vw"/>
            <Skill name="ReactJS " x="-18vw" y="-15vw"/>
            <Skill name="AngularJS " x="25vw" y="-15vw"/>
            <Skill name="NextJS " x="15vw" y="-12vw"/>
            <Skill name="HTML " x="30vw" y="-5vw"/>
            <Skill name="CSS (TailwindCSS) " x="0vw" y="-21vw"/>
            <Skill name="C / C++ " x="-23vw" y="18vw"/>
            <Skill name="Git " x="20vw" y="18vw"/>

            
            
        </div> 
    </>
  )
}

export default Skills