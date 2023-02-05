import React from 'react'
import { SiReact, SiNextdotjs, SiRedux, SiTailwindcss, SiCss3, SiHtml5, SiSass, SiJavascript, SiTypescript, SiGit, SiAdobephotoshop, SiAdobepremierepro, SiStyledcomponents } from 'react-icons/si'

const Skills = () => {


    return (
        <div className="flex flex-col justify-center items-center w-full ">
            <div className='w-100 h-100 flex flex-1 flex-col justify-center items-center'>
                <h1 className="text-4xl font-bold text-white mt-5 mb-5 gradient_text ">Skills</h1>
                {
                    <div className="p-5 items-center justify-center container mx-auto h-auto w-auto grid sm:grid-cols-2 gap-2 md:grid-cols-2 gap-2 lg:grid-cols-3 gap-3 xl:grid-cols-3 gap-4  ">

                        <div className='card justify-center items-center p-5 text-center'>
                            <div className="bg-buttonBackground rounded-md p-5 flex flex-auto justify-center items-center space-x-2 ">
                                <SiReact className="w-20 h-20 items-center justify-center" color='white' />
                            </div>
                            <h1 className="text-xl font-bold text-white ml-2">React</h1>
                        </div>

                        <div className='card justify-center items-center p-5 text-center'>
                            <div className="bg-buttonBackground  rounded-md p-5 flex flex-auto justify-center items-center space-x-2">
                                <SiNextdotjs className="w-20 h-20 items-center justify-center" color='white' />
                            </div>
                            <h1 className="text-xl font-bold text-white ml-2">Next.js</h1>
                        </div>
                        <div className='card justify-center items-center p-5 text-center'>
                            <div className="bg-buttonBackground  rounded-md p-5 flex flex-auto justify-center items-center space-x-2">
                                <SiRedux className="w-20 h-20 items-center justify-center" color='white' />
                            </div>
                            <h1 className="text-xl font-bold text-white ml-2">Redux</h1>
                        </div>

                        <div className='card justify-center items-center p-5 text-center'>
                            <div className="bg-buttonBackground  rounded-md p-5 flex flex-auto justify-center items-center space-x-2">

                                <div className="bg-buttonBackground  rounded-md p-5 flex flex-auto justify-center items-center space-x-2">
                                    <SiTailwindcss className="w-20 h-20 items-center justify-center" color='white' />
                                </div>
                            </div>
                            <h1 className="text-xl font-bold text-white ml-2">Tailwind</h1>

                        </div>

                        <div className='card justify-center items-center p-5 text-center'>
                            <div className="bg-buttonBackground  rounded-md p-5 flex flex-auto justify-center items-center space-x-2">
                                <SiCss3 className="w-20 h-20 items-center justify-center" color='white' />
                            </div>
                            <h1 className="text-xl font-bold text-white ml-2">CSS3</h1>
                        </div>


                        <div className='card justify-center items-center p-5 text-center'>

                            <div className="bg-buttonBackground  rounded-md p-5 flex flex-auto justify-center items-center space-x-2 ">
                                <SiHtml5 className="w-20 h-20 items-center justify-center" color='white' />
                            </div>
                            <h1 className="text-xl font-bold text-white ml-2">HTML5</h1>
                        </div>

                        <div className='card justify-center items-center p-5 text-center'>

                            <div className="bg-buttonBackground  rounded-md p-5 flex flex-auton justify-center items-center space-x-2">
                                <SiSass className="w-20 h-20 items-center justify-center" color='white' />
                            </div>
                            <h1 className="text-xl font-bold text-white ml-2">SCSS</h1>
                        </div>

                        <div className='card justify-center items-center p-5 text-center'>

                            <div className="bg-buttonBackground  rounded-md p-5 flex flex-auto justify-center items-center space-x-2">
                                <SiJavascript className="w-20 h-20 items-center justify-center" color='white' />
                            </div>
                            <h1 className="text-xl font-bold text-white ml-2">JavaScript</h1>
                        </div>


                        <div className='card justify-center items-center p-5 text-center'>

                            <div className="bg-buttonBackground  rounded-md p-5 flex flex-auto justify-center items-center space-x-2">
                                <SiTypescript className="w-20 h-20 items-center justify-center" color='white' />
                            </div>
                            <h1 className="text-xl font-bold text-white ml-2">TypeScript</h1>
                        </div>

                        <div className='card justify-center items-center p-5 text-center'>

                            <div className="bg-buttonBackground rounded-md p-5 flex flex-auto justify-center items-center space-x-2">
                                <SiGit className="w-20 h-20 items-center justify-center" color='white' />
                            </div>
                            <h1 className="text-xl font-bold text-white ml-2">GIT</h1>
                        </div>

                        <div className='card justify-center items-center p-5 text-center'>

                            <div className="bg-buttonBackground  rounded-md p-5 flex flex-auto justify-center items-center space-x-2">
                                <SiAdobephotoshop className="w-20 h-20 items-center justify-center" color='white' />
                            </div>
                            <h1 className="text-xl font-bold text-white ml-2">Adobe Photoshop</h1>
                        </div>

                        <div className='card justify-center items-center p-5 text-center'>

                            <div className="bg-buttonBackground  rounded-md p-5 flex flex-auto justify-center items-center space-x-2">
                                <SiAdobepremierepro className="w-20 h-20 flex flex-auto items-center justify-center" color='white' />
                            </div>
                            <h1 className="text-xl font-bold text-white ml-2">Adobe Premiere</h1>
                        </div>

                        <div className='card justify-center items-center p-5 text-center'>

                            <div className="bg-buttonBackground  rounded-md p-5 flex flex-auto justify-center items-center space-x-2">
                                <SiStyledcomponents className="w-20 h-20 flex flex-auto items-center justify-center" color='white' />
                            </div>
                            <h1 className="text-xl font-bold text-white ml-2">Styled Components</h1>
                        </div>


                    </div>
                }
            </div>
        </div>
    )

}

export default Skills