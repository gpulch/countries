import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { ICountry } from "./index";
import styles from "../styles/Home.module.css";

interface CountryProps {
  country: ICountry;
}

const Country: NextPage<CountryProps> = ({ country }) => {
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
          <div className="text-lg leading-6 font-medium text-gray-900">
            Subregion : {country.subregion}
          </div>
          <div className="text-lg leading-6 font-medium text-gray-900">
            Top Level Domain : {country.tld}
          </div>
          <div className="text-lg leading-6 font-medium text-gray-900">
            Currencies : 
          </div>
          <div className="text-lg leading-6 font-medium text-gray-900">
            Languages : foreign
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const name = ctx.params?.name;
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const data = await res.json();
  return { props: { country: data[0] } };
};

export default Country;
