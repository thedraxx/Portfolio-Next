import React from 'react'
import Profile from "../../../public/assets/profile.jpg"
import Image from 'next/image';
import { ChangeLanContext } from '@/context';
import { useContext } from 'react';
import CV from "../../../public/assets/CV.pdf"

const AboutMe = () => {
    const { IsLanguageActive } = useContext(ChangeLanContext)

    return (
        <div className="flex flex-col justify-center items-center w-full " id='about'>
            <h1 className="text-4xl font-bold text-white mt-5 mb-5 gradient_text scroll-smoth">
                {
                    IsLanguageActive ? "Sobre Mi" : "About Me"
                }
            </h1>
            <div
                className='flex flex-col justify-center items-center w-11/12 lg:w-3/4  bg-gray-800 rounded-xl p-5 shadow-2xl'
            >
                <Image
                    width={150}
                    height={150}
                    src={Profile}
                    alt="Profile"
                    className='flex-col justify-center items-center rounded-xl transform scale-x-10  hover:-scale-x-100 transition ease-in-out delay-50 lg:m-5 sm:visibility-hidden'
                />
                <div className="flex flex-col mt-5  sm: w-56 lg:w-96  " >
                    <p className="text-white text-justify ">
                        {
                            IsLanguageActive
                                ?
                                "Hola, soy Francisco, un apasionado desarrollador front-end y estudiante de Argentina. Comencé mi viaje como desarrollador hace casi dos años en 2020, y tengo una gran pasión por crear experiencias de usuario intuitivas y dinámicas. Me encanta aprender cosas nuevas y siempre estoy buscando nuevos desafíos para enfrentar."
                                :
                                "Hi, I'm Francisco, a passionate front-end developer and student from Argentina. I started my journey as a developer almost two years ago in 2020, and I have a strong passion for creating intuitive and dynamic user experiences. I love learning new things and I'm always seeking new challenges to tackle."
                        }
                    </p>
                    <div
                        className='bg-yellow mt-5 rounded-md flex flex-row justify-center w-50 items-center p-2 hover:bg-yellow-400 transition ease-in-out duration-500 transform hover:-translate-y-1 hover:scale-110   '
                    >
                        <a
                            target="_blank"
                            download={"Francisco_CV.pdf"}
                            href='https://docs.google.com/document/u/1/d/e/2PACX-1vScQwYuLLPSA_lCao782o9I-h-sLhv5XshTPjrsx6oqPrFKhD7R21iFC6DmvhDxvtXEtDi9n0yM022S/pub' rel="noreferrer">
                                {
                                    IsLanguageActive ? "Mirar CV" : "Check Resume"
                                }
                            </a>
                    </div>
                </div>

            </div>
        </div>
    )//
}

export default AboutMe