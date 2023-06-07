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

const findInMatrix = (i, j) => MATRIX[i][j];
const ChooseFighter = () => {
  const [position, setPosition] = useState([0, 0]);
  useEffect(() => {
    const handleKeyDown = (event) => {
      

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  });
  return (
    <Wrapper>
      <Heading>Виберіть бійця</Heading>
      <Notation>
        Користуйтесь стрiлками на клавиатурі та клавішею Enter
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
      <ChoosedHero>Your choise:</ChoosedHero>
    </Wrapper>
  );
};

export default ChooseFighter;
