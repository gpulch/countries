import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import TuilesPays from "./TuilesPays";
import { ICountry } from "../";

export interface ICountries {
    countries: ICountry[];
}

const BodyComponent = ({countries}: ICountries) => {

  return (
    <React.Fragment>
      <Header />
      <SearchBar />
      <TuilesPays countries={countries} />
    </React.Fragment>
  );
}

export default BodyComponent;
