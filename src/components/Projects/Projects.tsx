import React, { useState } from 'react'
import RenderProyects from './RenderProjects/RenderProyects';
import { GeneralProyects, TypeOfProyects } from '@/interface/Proyects';
import { useContext } from 'react';
import { ChangeLanContext } from '@/context';

const Projects = (dataProject: GeneralProyects) => {

    const [projectToShow, setProjectToShow] = useState<TypeOfProyects>({ project: "All" })
    const { IsLanguageActive } = useContext(ChangeLanContext)

    return (
        <div className="flex flex-col justify-center items-center w-full mt-20" id="projects">
            <div className='w-100 h-100 flex flex-1 flex-col justify-center items-center'>
                <h1 className="text-4xl font-bold text-white mt-5 mb-5 gradient_text ">
                    {	
                        IsLanguageActive ? "Proyectos" : "Projects"
                    }
                </h1>
                <div className='mb-5 '>
                    <button className={`${projectToShow.project === "All" ? "bg-yellow" : "bg-white"} rounded-md p-2 ml-2 mr-2`} onClick={() => setProjectToShow({ project: "All" })}>All</button>
                    <button className={`${projectToShow.project === "React" ? "bg-yellow" : "bg-white"} rounded-md p-2 ml-2 mr-2`} onClick={() => setProjectToShow({ project: "React" })}>React</button>
                    <button className={`${projectToShow.project === "Next.js" ? "bg-yellow" : "bg-white"} rounded-md p-2 ml-2 mr-2`} onClick={() => setProjectToShow({ project: "Next.js" })}>Next.js</button>
                    <button className={`${projectToShow.project === "Mobile" ? "bg-yellow" : "bg-white"} rounded-md p-2 ml-2 mr-2`} onClick={() => setProjectToShow({ project: "Mobile" })}>Mobile</button>
                    <button className={`${projectToShow.project === "Web App" ? "bg-yellow" : "bg-white"} rounded-md p-2 ml-2 mr-2`} onClick={() => setProjectToShow({ project: "Web App" })}>Web</button>
                </div>
                {
                    <RenderProyects dataProject={dataProject.dataProject} projectToShow={projectToShow.project} />
                }
            </div>
        </div>
    )
}

export default Projects