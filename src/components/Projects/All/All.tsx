import { ProjectosInterface } from '@/interfaces/database'
import React from 'react'

const All = ({ dataProject }: ProjectosInterface) => {

    console.log(dataProject)
    return (
        <div className="grid sm:grid-cols-1 gap-1  md:grid-cols-2 gap-2 lg:grid-cols-3 gap-3 xl:grid-cols-3 gap-4">
            {
                dataProject.map((data) => {
                    return (
                        <div className="rounded overflow-auto card bg-white  p-5" key={data.name}>
                            <h1 className="text-2xl font-bold text-black">{data.name}</h1>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default All