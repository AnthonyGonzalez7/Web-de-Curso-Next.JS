import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ApplicationWrapper } from '../components/layout/ApplicationWrapper'
import 'animate.css';

type HomeProps = {
  response: string;
};

const Home: NextPage = () => {
  return (
    <ApplicationWrapper title='Home'>
          <div className="grow flex justify-center items-center bg-[url('/images/background3.png')]">
          <div className="text-9xl font-extrabold ...">
            <h1 className="animate__animated animate__fadeInDown">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"> 
                Automoviles 
              </span>
            </h1>
            
            <div className="flex flex-col justify-center items-center animate__animated animate__fadeInDown">
              <a href="/carros">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Ver Autos
              </span>
            </button>
            </a>
            </div>
          </div>
          
        
          </div>
        </ApplicationWrapper>
  )
}

export default Home
