import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import styles from "../../styles/Home.module.css";
import { BodyComponentProps } from "./BodyComponent";
import { ICountry } from "../";

export interface CountryProps {
  country: ICountry;
}

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {

  const [query, setQuery] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  // const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
  //   if (event.key === "Enter") {
  //     console.log(query)
  //     onSearch(query);
  //   }
  // };


  return (
    <input
      value={query}
      type="search"
      name="search"
      placeholder="search"
      className={styles.searchBar}
      onChange={handleChange}
      // onKeyDown={handleKeyDown}
    ></input>
  );
};

export default SearchBar;
