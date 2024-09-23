/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import getDetailsTracks from '../api/getDetailsTracks';

const useSpotifyTrack = (trackId, accessToken) => {
  const [trackDetails, setTrackDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const detailsTracks = async () => {
    setLoading(true);
    setError(null);

    try {
      if (!trackId || !accessToken) return;
      const detailsTracks = await getDetailsTracks(accessToken, trackId);
      setTrackDetails(detailsTracks);
    } catch (error) {
      setError("Hubo un error al realizar la búsqueda");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    detailsTracks()
  }, []);

  return { trackDetails, loading, error };
};

export default useSpotifyTrack;
