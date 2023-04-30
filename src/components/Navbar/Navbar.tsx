import React from 'react'
import * as navbarStyles from '../../styles/Navbar.module.css'
import { useContext } from 'react';
import { ChangeLanContext } from '@/context';

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(true);
    const{ChangeLanguage, IsLanguageActive} = useContext(ChangeLanContext)

    const redirigirAbout = () => {
        window.location.hash = "#about";
    };

    const myProjects = () => {
        window.location.hash = "#projects";
    };

    const skills = () => {
        window.location.hash = "#skills";
    };

    const contact = () => {
        window.location.hash = "#contact";
    };

    return (
        <>
            <nav className="h-100 flex items-center justify-between flex-wrap bg-teal-500 p-6 bg-card border-b-4  ">
                <div className="flex items-center flex-shrink-0 text-white mr-6 flex-row">
                    <span className="font-semibold text-xl tracking-tight text-white text-2xl flex flex-row"><h1 className='bg-yellow rounded-md mr-1 p-1 text-black text-2xl'>Port</h1> <h1 className='rounded-md  p-1'>folio</h1></span>
                </div>
                <div className="block lg:hidden ">
                    <button className="flex items-center px-3 py-2 border border-3 rounded text-teal-200 border-teal-400 hover:text-yellow hover:border-yellow border transition ease-in-out delay-20 " onClick={() => setIsOpen(!isOpen)}>
                        <svg className="fill-current h-3 w-3 fill-white " viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className={`w-full block flex-end lg:flex lg:items-center  ${isOpen ? "lg:w-auto hidden " : "lg:w-auto"}`}>
                    <div className={`text-sm   lg:flex-grow  `}>
                        <a onClick={redirigirAbout} href="#responsive-header" className="block mt-4  lg:inline-block lg:mt-0 text-teal-200 hover:text-yellow mr-4 text-white text-lg  transition ease-in-out delay-50">
                           {
                                 IsLanguageActive ? "Sobre mi" : "About me"
                           }
                        </a>
                        <a onClick={myProjects} href="#responsive-header" className="block mt-4   lg:inline-block lg:mt-0 text-teal-200 hover:text-yellow mr-4 text-white text-lg  transition ease-in-out delay-50">
                            
                        {
                                    IsLanguageActive ? "Proyectos" : "Projects"
                        }
                        </a>
                        <a onClick={skills} href="#responsive-header" className="block mt-4   mr-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-yellow text-white text-lg  transition ease-in-out delay-50">
                            {
                                    IsLanguageActive ? "Habilidades" : "Skills"
                            }
                        </a>
                        <a onClick={contact} href="#responsive-header" className="block mt-4   lg:inline-block lg:mt-0 text-teal-200 hover:text-yellow mr-4 text-white text-lg  transition ease-in-out delay-50">
                            {
                                    IsLanguageActive ? "Contacto" : "Contact"
                            }
                        </a>
                        <a onClick={ChangeLanguage} href="#" className="block mt-4   lg:inline-block lg:mt-0 text-teal-200 hover:text-yellow mr-4 text-white text-lg  transition ease-in-out delay-50">
                            English <span className='text-yellow'>/</span> Español
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar