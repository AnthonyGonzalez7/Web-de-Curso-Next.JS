import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { CarsList, ICars } from "../../components/CarsList/CarsList";
import { ApplicationWrapper } from "../../components/layout/ApplicationWrapper";
import 'animate.css';
import Image from 'next/image'

interface TProps {
    car: ICars;
}
  

const CarDetail: NextPage<TProps> = ({ car }) =>{
    return (
        <ApplicationWrapper title={car.Title}>
            <div className="bg-[url('/images/background3.png')]">
                <br />
                <div className="text-center text-5xl font-extrabold ...">
                    <h1 className="animate__animated animate__fadeInDown">
                        {car.Title}
                    </h1>
                </div>
                <br />
                <div className="columns-3 ... flex flex justify-center text-white items-center p-12">
                    
                <div className="container mx-auto">
                    
                    <div className="container grid grid-cols-2 gap-2 mx-auto ">
                        <div className="w-full rounded animate__animated animate__fadeInLeft">
                            <img src={car.Poster}
                                alt="image" />
                        </div>
                        <div className="w-full rounded animate__animated animate__fadeInLeft">
                            <img src={car.Poster2}
                                alt="image" />
                        </div>
                        <div className="w-full rounded animate__animated animate__fadeInLeft">
                            <img src={car.Poster3}
                                alt="image" />
                        </div>
                        <div className="w-full rounded animate__animated animate__fadeInLeft">
                            <img src={car.Poster4}
                                alt="image" />
                        </div>
                    </div>
                </div>
                <div className="container ml-20 animate__animated animate__fadeInRight">
                    <h4>Motor: {car.Engine}</h4>
                    <br />
                    <h4>Transmisión: {car.Transmissions}</h4>
                    <br />
                    <h4>Carroceria: {car.BodyWork}</h4>
                    <br />
                    <h4>Tracción: {car.traction}</h4>
                    <br />
                    <h4>Aceleración: {car.Aceleration}</h4>
                    <br />
                    <h4>Descripcion: </h4>
                    <div className="text-justify ...">
                    <h4>{car.Context}</h4>
                    </div>
                    <br />
                </div>
                </div>
            </div>
        </ApplicationWrapper>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/cars/" + context.params?.id
    );
    const car = await res.json();
  
    return {
      props: {
        car,
      },
    };
  };
  

export default CarDetail;