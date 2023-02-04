import React from 'react'
import Profile from "../../../public/assets/profile.jpg"
import Image from 'next/image';
const AboutMe = () => {

    return (
        <div className="flex flex-col justify-center items-center w-full ">
            <div className='w-100 h-100 flex flex-1 flex-col justify-center items-center'>
                <h1 className="text-4xl font-bold text-white mt-5 mb-5 gradient_text ">About Me</h1>
                <Image width={150} height={150} src={Profile} alt="Profile" className='flex-col justify-center items-center rounded-xl' />
                <div className="flex flex-col mt-5  sm: w-56 lg:w-96  ">
                    <p className="text-white text-justify ">
                        Hi! My name is Jean, Im from Venezuela and I have +1 year of work experience in JavaScript/TypeScript and React, Im a lover of page design or other things and whenever I can I try to learn new technologies since I discovered programming at 16. I love what I do and I help others with what I can, I also use in web, mobile and desktop development Next.js, Angular, Ionic and Electron implementing good practices, clean architecture, pixel perfect and agile methodologies.
                    </p>
                    <div className='bg-white mt-5 rounded-md flex flex-row justify-center w-50 items-center p-2   '>
                        <a href='https://www.canva.com/design/DAFZiFE_bxk/Vg793k7J3e2vxJIWZieh6Q/view?utm_content=DAFZiFE_bxk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'>ver CV</a>
                    </div>
                </div>

            </div>
        </div>
    )//
}

export default AboutMe