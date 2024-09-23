/* eslint-disable no-unused-vars */
import React from "react";
import styles from './styles.css';

const LoginPage = () => {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const redirectUri = process.env.REACT_APP_URI_SPOTIFY;
  const scopes = [
    "user-read-private",
    "user-read-email",
    "playlist-read-private",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-library-read",
    "user-library-modify",
  ];

  const loginUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(
    redirectUri
  )}&scope=${encodeURIComponent(scopes.join(" "))}&show_dialog=true`;

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Iniciar sesión en Spotify</h1>
        <a href={loginUrl} className="login-button">
          Iniciar sesión con Spotify
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
