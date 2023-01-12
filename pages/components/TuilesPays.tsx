import React from "react";
import Link from "next/link";
import { BodyComponentProps } from "./BodyComponent";
import { ICountry } from "../";
import CountryComponent from "./CountryComponent";
import styles from "../../styles/Home.module.css";

interface TuilesPaysProps {
  countries: ICountry[];
}

function TuilesPays({ countries }: TuilesPaysProps) {
  console.log(countries);
  return (
    <div className={styles.card}>
      {countries.map((country: ICountry) => (
        <Link href={{
          pathname: '/[name]',
          query: { name: country.name.common },
        }}>
          <CountryComponent key={country.name.common} country={country} />
        </Link>
      ))}
    </div>
  );
}

export default TuilesPays;