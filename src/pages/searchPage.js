/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import SearchForm from "../components/searchForm";
import TrackList from "../components/trackList";
import useSpotifySearch from "../hooks/useSpotifySearch";
import styles from "./styles.css";

const SearchPage = ({ accessToken }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { tracks, loading, error } = useSpotifySearch(accessToken, searchTerm);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Spotify Search</h1>
        <SearchForm
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
        />
      </div>

      <div className="body">
        {loading && <p>Buscando...</p>}

        {error && <p>{error}</p>}

        {!tracks.length ? (
          <div className="track-list .track-info p">
            <p>
              Para realizar una busqueda escribe el nombre de la cancion, o el
              artista o el album.
            </p>
          </div>
        ) : null}
        <div className="content">
          <TrackList tracks={tracks} />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
