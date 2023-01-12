import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import TuilesPays from "./TuilesPays";
import RegionsToggle from "./RegionsToggle";
import { ICountry } from "../";

export interface BodyComponentProps {
  countries: ICountry[];
  regions: string[];
  selectedRegion: string;
  onSearch: (query: string) => void;
  setSelectedRegion: (region: string) => void;
}

const BodyComponent = ({ countries, regions, selectedRegion, setSelectedRegion, onSearch }: BodyComponentProps) => {
  return (
    <React.Fragment>
      <Header />
      <SearchBar onSearch={onSearch} />
      <RegionsToggle
        regions={regions}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
      {countries.length === 0 ? (
        <p>sorry, no country found</p>
      ) : (
        <TuilesPays countries={countries} />
      )}
    </React.Fragment>
  );
};

export default BodyComponent;
