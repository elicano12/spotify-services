/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from 'react-router-dom';
 import styles from "./styles.css";

const TrackList = ({ tracks }) => {
  return (
    <div className="track-list">
      {tracks.map((track) => (
        <div key={track.id} className="track-list li">
          <img
            className="track-list img"
            src={track.album.images[0]?.url}
            alt={`${track.name} album cover`}
            width="100"
          />
          <div className="track-list .track-info">
            <h3>
              <Link to={`/track/${track.id}`}>{track.name}</Link>
            </h3>
            <p className="track-list .track-info p">
              {track.artists.map((artist) => artist.name).join(", ")}
            </p>
            <p>
              <i>{track.album.name}</i>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackList;
