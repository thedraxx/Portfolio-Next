import Image from 'next/image'
import React from 'react'
import github from '../../../public/assets/github.png'
import linkedin from '../../../public/assets/linkedin.png'
import { FaLinkedin, FaGithubAlt } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className=" fixed bottom-0 left-0 p-5 z-10 ">
            <a href="https://github.com/thedraxx" target="_blank" rel="noreferrer">
                <FaGithubAlt size={35} className='rounded-lg mr-10 mt-5 bg-white hover:bg-yellow hover:rotate-45 transition ease-in-out delay-20' />
            </a>
            <a href="https://www.linkedin.com/in/iscodev/" target="_blank" rel="noreferrer" >
                <FaLinkedin size={35} className='rounded-lg mr-10 mt-5 bg-white hover:bg-yellow hover:rotate-45  transition ease-in-out delay-20' />
            </a>

        </div>

    )
}

export default SocialMedia