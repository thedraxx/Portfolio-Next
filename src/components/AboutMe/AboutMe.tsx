import React from 'react'
import Profile from "../../../public/assets/profile.jpg"
import Image from 'next/image';
const AboutMe = () => {

    return (
        <div className="flex flex-col justify-center items-center w-full " id='about'>
            <div className='w-100 h-100 flex flex-1 flex-col justify-center items-center'>
                <h1 className="text-4xl font-bold text-white mt-5 mb-5 gradient_text ">About Me</h1>
                <Image width={150} height={150} src={Profile} alt="Profile" className='flex-col justify-center items-center rounded-xl' />
                <div className="flex flex-col mt-5  sm: w-56 lg:w-96  " >
                    <p className="text-white text-justify ">
                        {"Hi, I'm Francisco, a passionate front-end developer and student from Argentina. I started my journey as a developer almost two years ago in 2020, and I have a strong passion for creating intuitive and dynamic user experiences. I love learning new things and I'm always seeking new challenges to tackle."}
                    </p>
                    <div className='bg-yellow mt-5 rounded-md flex flex-row justify-center w-50 items-center p-2   '>
                        <a href='https://www.canva.com/design/DAFZiFE_bxk/Vg793k7J3e2vxJIWZieh6Q/view?utm_content=DAFZiFE_bxk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'>Check Resume</a>
                    </div>
                </div>

            </div>
        </div>
    )//
}

export default AboutMe