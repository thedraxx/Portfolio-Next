import React, { useState } from 'react'
import Web from './Web/Web'
import All from './All/All'
import NextPage from './Next/NextPage'
import Mobile from './Mobile/Mobile'
import { ProjectosInterface } from '@/interfaces/database'

interface Project {
    project: "Web" | "Mobile" | "Next.js" | "React" | "All"
}

const Projects = (dataProject: ProjectosInterface) => {

    // console.log(dataProject.dataProject)

    const [projectToShow, setProjectToShow] = useState<Project>({ project: "All" })

    return (
        <div className="flex flex-col justify-center items-center w-full mt-20">
            <div className='w-100 h-100 flex flex-1 flex-col justify-center items-center'>
                <h1 className="text-4xl font-bold text-white mt-5 mb-5 gradient_text ">My Projects</h1>
                <div className='mb-5 '>
                    <button className="bg-white rounded-md p-2 ml-2 mr-2" onClick={() => setProjectToShow({ project: "All" })}>All</button>
                    <button className="bg-white rounded-md p-2 ml-2 mr-2" onClick={() => setProjectToShow({ project: "React" })}>React</button>
                    <button className="bg-white rounded-md p-2 ml-2 mr-2" onClick={() => setProjectToShow({ project: "Next.js" })}>Next.js</button>
                    <button className="bg-white rounded-md p-2 ml-2 mr-2" onClick={() => setProjectToShow({ project: "Mobile" })}>Mobile</button>
                </div>
                {
                    projectToShow.project === "All" ? <All dataProject={dataProject.dataProject} /> : projectToShow.project === "React" ? <Web /> : projectToShow.project === "Next.js" ? <NextPage /> : projectToShow.project === "Mobile" ? <Mobile /> : <Web />
                }
            </div>
        </div>
    )
}

export default Projects