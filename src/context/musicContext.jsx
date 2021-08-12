import React, { createContext, useContext, useEffect, useState } from "react";

const musicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <musicContext.Provider value={{ playing, setPlaying }}>
      {children}
    </musicContext.Provider>
  );
};

export const useMusicprovider = () => {
  return useContext(musicContext);
};
