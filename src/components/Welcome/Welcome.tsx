import React from 'react'
import gradient from '../../styles/gradient.module.css'

const Welcome = () => {



    return (
        <>
            <div className='flex flex-col justify-center items-center w-full h-screen'>
                <div className='text-4xl font-bold text-gray-800 justify-center items-center my-1 scale-75 hover:scale-100 ease-in duration-500  '>
                    <h1 className={gradient.gradient_text}>Hola, soy</h1>
                    <h1 className={gradient.gradient_text2}>Frontend</h1>
                    <h1 className={gradient.gradient_text}>Developer</h1>
                </div>
            </div>
        </>
    )
}

export default Welcome