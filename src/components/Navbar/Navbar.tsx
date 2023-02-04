import React from 'react'
import * as navbarStyles from '../../styles/Navbar.module.css'

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(true);

    return (
        <>
            <nav className="h-100 flex items-center justify-between flex-wrap bg-teal-500 p-6 bg-black">
                <div className="flex items-center flex-shrink-0 text-white mr-6 ">
                    <span className="font-semibold text-xl tracking-tight text-white text-xl">Portafolio</span>
                </div>
                <div className="block lg:hidden ">
                    <button className="flex items-center px-3 py-2 border border-3 rounded text-teal-200 border-teal-400 hover:text-purple hover:border-purple border transition ease-in-out delay-20 " onClick={() => setIsOpen(!isOpen)}>
                        <svg className="fill-current h-3 w-3 fill-white " viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className={`w-full block flex-end lg:flex lg:items-center  ${isOpen ? "lg:w-auto hidden " : "lg:w-auto"}`}>
                    <div className={`text-sm lg:flex-grow `}>
                        <a href="#responsive-header" className="block mt-4 mr-10 lg:inline-block lg:mt-0 text-teal-200 hover:text-purple mr-4 text-white text-lg  transition ease-in-out delay-50">
                            Docs
                        </a>
                        <a href="#responsive-header" className="block mt-4  mr-10 lg:inline-block lg:mt-0 text-teal-200 hover:text-purple mr-4 text-white text-lg  transition ease-in-out delay-50">
                            Examples
                        </a>
                        <a href="#responsive-header" className="block mt-4   mr-10 lg:inline-block lg:mt-0 text-teal-200 hover:text-purple text-white text-lg  transition ease-in-out delay-50">
                            Blog
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar