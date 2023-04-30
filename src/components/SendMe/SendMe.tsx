//  @ts-nocheck comment at the top of the file
import React, { useRef,useContext } from 'react'
import emailjs from '@emailjs/browser';
import { useForm } from '@/hooks/useFom';
import styles from "../../styles/SendMe.module.css";
import { ChangeLanContext } from '@/context';

const SendMe = () => {
    const form = useRef<HTMLDivElement | null | any>(null);
    const { IsLanguageActive } = useContext(ChangeLanContext)

    const [formValues, handleInputChange] = useForm({
        email: '',
        message: ''
    })

    const { email, message }: any = formValues

    const sendEmail = async (e: { preventDefault: () => void; }) => {

        e.preventDefault()
        try {
            if (email === '' || message === '') return alert('Por favor, rellene todos los campos')

            if (!/\S+@\S+\.\S+/.test(email)) return alert('Por favor, introduzca un email válido')

            if (message.length < 10) return alert('Por favor, introduzca un mensaje de al menos 10 caracteres')

            await emailjs.sendForm('service_qksi4tc', 'template_zqzc909', form.current, 'ywb4feFd4jk6dBlo8')
            alert('Mensaje enviado correctamente')
        }
        catch (err) {
            alert('Error al enviar el mensaje')
        }
    }

    return (
        <div className="flex rounded-xl justify-center items-center h-auto w-auto p-10 min-w-full bg-gradient-to-r from-yellow to-purple  " id="contact">
            <h1 className={`${styles.textContact}`}>
                {
                    IsLanguageActive ? 'Contacto' : 'Contact'
                }
            </h1>
            <form onSubmit={sendEmail} ref={form} className=" max-w-sm bg-black p-10 rounded-lg  w-96" >

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4">
                            {
                                IsLanguageActive ? 'Tu Email:' : 'Your Email:'
                            }
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="rounded-md bg-gray-200 appearance-none border-2 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            type="text"
                            placeholder="Enter email"
                            name="email"
                            autoComplete="off"
                            value={email}
                            onChange={handleInputChange}
                        />

                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4">
                            {
                                IsLanguageActive ? 'Mensaje:' : 'Message:'
                            }
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <textarea
                            className="rounded-md p-5 gray-200 appearance-none border-5 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            type="text"
                            placeholder="Enter Message"
                            name="message"
                            autoComplete="off"
                            value={message}
                            onChange={handleInputChange}
                        />

                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button className="shadow flex flex-auto justify-center items-center bg-card hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                           {
                                 IsLanguageActive ? 'Enviar' : 'Send'
                           }
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SendMe