/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import getTracks from "../api/getDataTracks";

const useSpotifySearch = (accessToken, searchTerm) => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchTracks = async () => {
    setLoading(true);
    setError(null);

    try {
      if (!searchTerm || !accessToken) return;
      const tracks = await getTracks(accessToken, searchTerm);
      setTracks(tracks);
    } catch (error) {
      setError("Hubo un error al realizar la búsqueda");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    searchTracks();
  }, [searchTerm]);

  return { tracks, loading, error };
};

export default useSpotifySearch;
