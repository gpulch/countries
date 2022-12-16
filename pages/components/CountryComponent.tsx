import React from "react";
import { ICountry } from "../";
import styles from "../../styles/Home.module.css";

export interface CountryProps {
  country: ICountry;
}

export default function CountryComponent({ country }: CountryProps) {
  return (
    <div className={styles.tuile}>
    {/* <div className="bg-white tuile shadow-md rounded-md p-4"> */}
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            className="h-12 w-12 rounded-full " className={styles.flag}
            src={country.flags.svg}
            alt=""
          />
        </div>
        <div>
          <div className="text-lg leading-6 font-medium text-gray-900">
            {country.name.common}
          </div>
          <div className="text-lg leading-6 font-medium text-gray-900">
            {country.capital}
          </div>
          <div className="text-lg leading-6 font-medium text-gray-900">
            {country.region}
          </div>
        </div>
      </div>
    </div>
  );
}
