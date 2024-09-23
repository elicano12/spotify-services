/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./styles.css";

const SearchForm = ({ searchTerm, setSearchTerm, handleSearch }) => (
  <form onSubmit={handleSearch} className="search-form">
    <input
      className="search-form input"
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Buscar"
    />
    <button className="search-form button:hover" type="submit">
      Buscar
    </button>
  </form>
);

export default SearchForm;
