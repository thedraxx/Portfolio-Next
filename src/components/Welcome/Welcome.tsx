import React from 'react'
import gradient from '../../styles/gradient.module.css'

const Welcome = () => {



    return (
        <>
            <div className='flex flex-col justify-center items-center w-full mb-40 mt-40'>
                <div className='text-2xl text-center font-bold text-gray-800 justify-center items-center my-1 scale-95 hover:scale-100 ease-in duration-500  '>
                    <h1 className='text-white'>{"Hi! "}</h1>
                    <h1 className='text-white'>{"I'm Francisco and I'm..."}</h1>
                    <h1 className={gradient.gradient_text}>Frontend</h1>
                    <h1 className={gradient.gradient_text3}>Developer</h1>
                </div>
            </div>
        </>
    )
}

export default Welcome