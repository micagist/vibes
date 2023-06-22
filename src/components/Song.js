import React from "react";

const Song = ({ currSng }) => {
  return (
    <div className="song-container">
      <img src={currSng.cover} alt="album cover art"></img>
      <h2>{currSng.name}</h2>
      <h3>{currSng.artist}</h3>
    </div>
  );
};

export default Song;
