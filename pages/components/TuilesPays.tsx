import React from "react";
import { ICountries } from "./BodyComponent";
import { ICountry } from "../";
import CountryComponent from "./CountryComponent";
import styles from "../styles/Home.module.css";

function TuilesPays({ countries }: ICountries) {
console.log(countries)
  return (
    // <div>Toto</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {countries.map((country:ICountry) => (
        <CountryComponent key={country.name.common} country={country} />
      ))}
    </div>
  );
}

export default TuilesPays;
