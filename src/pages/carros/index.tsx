import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ApplicationWrapper } from '../../components/layout/ApplicationWrapper'
import { CarsList } from '../../components/CarsList/CarsList';

type Tprops = {
  response: string;
};

const Autos: NextPage = () => {
  return (
        <ApplicationWrapper title='Autos'>
          <div className="grow flex justify-center items-center bg-[url('/images/background3.png')]">
            <CarsList />
          </div>
        </ApplicationWrapper>
  )
}

export default Autos