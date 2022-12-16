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
          <img className={styles.flag} src={country.flags.svg} alt="" />
        </div>
        <div>
          <div className="text-lg leading-6 font-large text-gray-900">
            {country.name.common}
          </div>
          <div className="text-lg leading-6 font-medium text-gray-900">
            Population : {country.population}
          </div>
          <div className="text-lg leading-6 font-medium text-gray-900">
            Region : {country.region}
          </div>
          <div className="text-lg leading-6 font-medium text-gray-900">
            Capital : {country.capital}
          </div>
        </div>
      </div>
    </div>
  );
}
