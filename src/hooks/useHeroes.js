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
      setTimeout(() => {
        navigate("/fight");
      }, [2000]);
    }
  };

  const getRandomHero = () =>
    heroes ? heroes[Math.floor(Math.random() * heroes.length)] : null;

  return {
    selectHeroAndPush,
    getRandomHero,
  };
};
