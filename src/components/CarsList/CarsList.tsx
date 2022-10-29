import React, {useEffect, useState} from "react";
import Car from "./Cars/Cars";

export interface ICars{
    Title: string;
    "Engine": string;
    "Transmissions": string;
    "BodyWork": string;
    "traction": string;
    "Aceleration": string;
    "Context": string;
    id: number;
    "Poster": string;
    "Poster2": string;
    "Poster3": string;
    "Poster4": string;
}

const useCars = () => {
    const [Cars,setCars] = useState<ICars[]>([]);
    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_API_URL+"/cars")
          .then((res) => res.json())
          .then((data: ICars[]) => setCars(data.slice(0,12)))
          .catch((error) => console.error(error));
      }, []);
    return Cars;
}

export const CarsList = () => {
    const cars = useCars();
    return( <div className="flex flex-col justify-center text-white items-center p-6">
                <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                    {cars.map((car) => (
                        <Car key={car.id} car = {car}  />
                    ))}
                </ul>
           </div>
        );
};