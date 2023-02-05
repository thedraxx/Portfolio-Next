import React from 'react'
import { AiFillGithub, AiFillEye } from 'react-icons/ai'
import style from "../../../styles/All.module.css"
import All from '../All/All';
import { Projects, infoProyects } from '@/interface/Proyects';


const RenderProyects = ({ dataProject, projectToShow }: Projects) => {

    return (
        projectToShow === "All" ? <All dataProject={dataProject} /> :
            <div className="container mx-auto h-auto w-auto grid sm:grid-cols-2 gap-2 md:grid-cols-2 gap-2 lg:grid-cols-3 gap-3 xl:grid-cols-3 gap-4  ">
                {
                    dataProject.filter((data: infoProyects) => {
                        return data.tecnologies === projectToShow
                    }).map((data) => {
                        return (
                            <div className="rounded overflow-auto card bg-card p-10  brightness-100 hover:brightness-75 " key={data.name}>
                                <div className="flex-column justify-center items-center mt-5 w-100 scale-95 rounded-xl shadow-purple hover:scale-100 ease-in duration-300  hover:shadow-purpleClear shadow-2xl ">
                                    <div className='sm: flex flex-col  justify-center items-center   lg: flex flex-row justify-center items-center'>
                                        <img src={data.image} alt={data.name} className='w-full h-50 object-cover' />
                                        <div className={`${style.imageDiv} `}>
                                            <a href="google.com">
                                                <AiFillGithub size={40} color='white' className='p-2 rounded-xl bg-buttonBackground mr-2 ml-2 mb-2 ' />
                                            </a>
                                            <a>
                                                <AiFillEye size={40} color='white' className='p-2 rounded-xl bg-buttonBackground  mr-2 ml-2 mb-2' />
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className='text-tecnologies text-3x1 font-bold pt-5 pl-5'>{data.tecnologies}</h2>
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

export default RenderProyects