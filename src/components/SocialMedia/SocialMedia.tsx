import Image from 'next/image'
import React from 'react'
import github from '../../../public/assets/github.png'
import linkedin from '../../../public/assets/linkedin.png'

const SocialMedia = () => {
    return (
        <div className=" fixed bottom-0 left-0 br-5 p-5 ">
            <div className="flex flex-column justify-center items-center mr-0">
                <a href="https://github.com/thedraxx" target="_blank" rel="noreferrer">
                    <Image src={github} alt="github" width={30} height={30} className='rounded-full mr-10' />
                </a>
                <a href="https://www.linkedin.com/in/cerranofrancisco/" target="_blank" rel="noreferrer">
                    <Image src={linkedin} alt="linkedin" width={30} height={30} />
                </a>
            </div>
        </div>

    )
}

export default SocialMedia