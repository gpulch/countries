import React from "react";
import styles from "../../styles/Home.module.css";

function SearchBar() {
  return (
    <input
    type="search"
    name="search"
    placeholder="search"
    className={styles.searchBar}
    ></input>
  );
}

export default SearchBar;


