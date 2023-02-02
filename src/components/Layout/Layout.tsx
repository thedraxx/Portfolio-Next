import Head from 'next/head'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import SocialMedia from '../SocialMedia/SocialMedia'

interface LayoutProps {
    children: React.ReactNode,
    title?: string
}

const origin = (process.env.NODE_ENV === 'development') ? 'http://localhost:3000' : ''

const Layout = ({ children, title }: LayoutProps) => {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="app" content="Mi Portafolio" />
                <meta name="descripcion" content={`Este es el portafolio de Francisco Cerrano`} />
                <meta name="keywords" content={`${title}`} />
                <meta property="og:title" content={`Bienvenido Navegante`} />
                <meta property="og:description" content={`Esto es el portafolio de Frank`} />
                <meta property="og:image" content={origin} />
            </Head>
            <Navbar />
            <SocialMedia />
            <main style={{
                padding: '1rem 1rem'
            }}>
                {children}
            </main>
        </>
    )
}

export default Layout