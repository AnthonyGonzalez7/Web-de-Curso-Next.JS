import Link from "next/link";
import React, { FC } from "react";
import { ICars } from "../CarsList";
import Image from 'next/image'

interface TProps {
    car: ICars;
}

const Car: FC<TProps> = ({car}) =>{
    return <div>
        <li>
            <Link href={`/carros/${car.id}`}>
            <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:container md:mx-auto hover:scale-105 transition duration-300 ease-in-out rounded-lg shadow-lg">
                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href={`/Cars/${car.id}`}>
                            <img className="rounded-t-lg" src={car.Poster} alt={`${car.Title}`} />
                        </a>
                        <div className="p-5">
                            <a href={`/Cars/${car.id}`}>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{car.Title}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Carroceria: {car.BodyWork}</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">0-60 Mph: {car.Aceleration}</p>
                        </div>
                    </div>
            </div>


            </Link>
        </li>
    </div>;
};

export default Car;