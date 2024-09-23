/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import postAccessToken from "./api/postAccessToken";
import SearchPage from "./pages/searchPage";
import TrackDetailPage from "./pages/trackDetailPage";
import LoginPage from "./pages/loginSpotify";
import styles from "./index.css";

const App = () => {

  const clientId = process.env.REACT_APP_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
  const redirectUri = process.env.REACT_APP_URI_SPOTIFY

  const [accessToken, setAccessToken] = useState("");
  const [code, setCode] = useState("");

  const getAccessToken = async () => {
    const token = await postAccessToken(clientId, clientSecret, redirectUri, code);
    setAccessToken(token);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    if (code) {
      setCode(code);
      getAccessToken();
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {accessToken && (
          <Route
            path="/search-track"
            element={<SearchPage accessToken={accessToken} />}
          />
        )}
        {accessToken && (
          <Route
            path="/track/:id"
            element={<TrackDetailPage accessToken={accessToken} />}
          />
        )}
      </Routes>
    </Router>
  );
};

export default App;
