/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import useSpotifyTrack from "../hooks/useSpotifyTrack";
import styles from "./styles.css";

const TrackDetailPage = ({ accessToken }) => {
  const { id } = useParams();
  const { trackDetails, loading, error } = useSpotifyTrack(id, accessToken);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!trackDetails) return null;

  const previewUrl = trackDetails.preview_url || null;

  return (
    <div className="track-detail">
      <h1>{trackDetails.name}</h1>
      <p>
        Artista: {trackDetails.artists.map((artist) => artist.name).join(", ")}
      </p>
      <p>Álbum: {trackDetails.album.name}</p>
      <p>
        Duración: {Math.floor(trackDetails.duration_ms / 60000)}:
        {((trackDetails.duration_ms % 60000) / 1000).toFixed(0)}
      </p>
      <img src={trackDetails.album.images[0]?.url} alt={trackDetails.name} />

      {previewUrl ? (
        <div className="audio-player">
          <h3>Escucha un fragmento:</h3>
          <audio controls>
            <source src={previewUrl} type="audio/mpeg" />
            Tu navegador no soporta el elemento de audio.
          </audio>
        </div>
      ) : (
        <p>Lo sentimos, no hay fragmento disponible para esta canción.</p>
      )}

      <a
        href={trackDetails.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ir a Spotify
      </a>
    </div>
  );
};

export default TrackDetailPage;
