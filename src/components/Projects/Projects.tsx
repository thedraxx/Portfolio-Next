import React, { useState } from 'react'
import RenderProyects from './RenderProjects/RenderProyects';
import { GeneralProyects, TypeOfProyects } from '@/interface/Proyects';

const Projects = (dataProject: GeneralProyects) => {

    const [projectToShow, setProjectToShow] = useState<TypeOfProyects>({ project: "All" })

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
                    <RenderProyects dataProject={dataProject.dataProject} projectToShow={projectToShow.project} />
                }
            </div>
        </div>
    )
}

export default Projects