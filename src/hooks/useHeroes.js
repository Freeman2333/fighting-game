import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { HeroContext } from "../context/HeroContext";
import { heroes } from "../mocks/heroes";

export const useHeroes = () => {
  const { setSelectedHero } = useContext(HeroContext);

  const navigate = useNavigate();

  const selectHeroAndPush = (id) => {
    const selectedHero = heroes.find((hero) => hero.id === id);
    if (selectedHero) {
      setSelectedHero(selectedHero);
      navigate("/fight");
    }
  };

  return {
    selectHeroAndPush,
  };
};
