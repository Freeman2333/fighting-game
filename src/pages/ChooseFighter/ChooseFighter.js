import React, { useState, useEffect } from "react";

import { MATRIX } from "../../helpers";

import {
  Wrapper,
  Heading,
  Notation,
  HeroesWrapper,
  ChoosedHero,
} from "./style";
import { heroes } from "../../mocks/heroes";
import { HeroCard } from "../../components/HeroCard";
import { matrixMovement } from "../../helpers";
import { useHeroes } from "../../hooks/useHeroes";

const findInMatrix = (i, j) => MATRIX[i][j];

const ChooseFighter = () => {
  const { selectHeroAndPush } = useHeroes();

  const [position, setPosition] = useState([0, 0]);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        const selectedId = findInMatrix(position[0], position[1])?.id;
        selectedId && selectHeroAndPush(selectedId);
      }
      matrixMovement(event, position, setPosition);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  });
  return (
    <Wrapper>
      <Heading>Виберіть бійця</Heading>
      <Notation>
        Користуйтесь стрiлками на клавіатурі та клавішею Enter. Після вибору
        чекайте 2 секунди
      </Notation>
      <HeroesWrapper>
        {heroes?.map((el) => (
          <HeroCard
            hero={el}
            key={el.id}
            choosen={findInMatrix(position[0], position[1])?.id === el.id}
          />
        ))}
      </HeroesWrapper>
      <ChoosedHero>
        Боєць: {findInMatrix(position[0], position[1])?.hero}
      </ChoosedHero>
    </Wrapper>
  );
};

export default ChooseFighter;
