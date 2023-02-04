import { ProjectosInterface } from '@/interfaces/database'
import Image from 'next/image'
import React from 'react'

const All = ({ dataProject }: ProjectosInterface) => {

    console.log(dataProject)
    return (
        <div className="container mx-auto h-auto w-auto grid sm:grid-cols-2 gap-2  md:grid-cols-2 gap-2 lg:grid-cols-3 gap-3 xl:grid-cols-3 gap-4">
            {
                dataProject.map((data) => {
                    return (
                        <div className="rounded overflow-auto card bg-card p-10 " key={data.name}>


                            <div className="flex-column justify-center items-center mt-5 w-100 scale-95 rounded-xl   shadow-purple hover:scale-100 ease-in duration-300  hover:shadow-purpleClear shadow-2xl ">



                                <img src={data.image} alt={data.name} className='w-full h-50 object-cover' />
                                <div>
                                    <h2 className='text-tecnologies text-3x1 font-bold pt-5 pl-5'>            {data.tecnologies}</h2>

                                </div>
                                <h1 className="text-2xl font-bold text-white pl-5">{data.name}</h1>
                                <h4 className="text-white text-10 justify-center items-center w-auto p-5">{data.description}</h4>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default All