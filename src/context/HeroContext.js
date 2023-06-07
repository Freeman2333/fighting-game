import React, { createContext, useState } from "react";

export const HeroContext = createContext();

export const HeroContextProvider = ({ children }) => {
  const [selectedHero, setSelectedHero] = useState(null);

  return (
    <HeroContext.Provider value={{ selectedHero, setSelectedHero }}>
      {children}
    </HeroContext.Provider>
  );
};

export default HeroContextProvider;
