import { useState, useEffect, useRef } from "react";
import song from "../assets/music/Lily's Theme.mp3";
import { useMusicprovider } from "../context/musicContext";

const Player = () => {
  const audioRef = useRef();

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 1;
    audio.play();
  }, []);

  return (
    <div>
      <audio ref={audioRef} src={song} loop={true}></audio>
    </div>
  );
};

export default Player;
