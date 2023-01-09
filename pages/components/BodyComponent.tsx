import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import TuilesPays from "./TuilesPays";
import { ICountry } from "../";

export interface BodyComponentProps {
    countries: ICountry[];
    onSearch: (query: string) => void;
}

const BodyComponent = ({countries, onSearch}: BodyComponentProps) => {

  return (
    <React.Fragment>
      <Header />
      <SearchBar onSearch={onSearch}/>
      {/* {countries.length === 0 ? (<p>Aucun pays ne correspond à votre recherche</p>)
      : ()} */}
      <TuilesPays countries={countries} />
    </React.Fragment>
  );
}

export default BodyComponent;
