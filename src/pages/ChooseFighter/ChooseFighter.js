import React from "react";

import {
  Wrapper,
  Heading,
  Notation,
  HeroesWrapper,
  ChoosedHero,
} from "./style";
import { heroes } from "../../mocks/heroes";
import { HeroCard } from "../../components/HeroCard";

const ChooseFighter = () => {
  return (
    <Wrapper>
      <Heading>Виберіть бійця</Heading>
      <Notation>
        Користуйтесь стрiлками на клавиатурі та клавішею Enter
      </Notation>
      <HeroesWrapper>
        {heroes?.map((el) => (
          <HeroCard hero={el} key={el.id} choosen={false} />
        ))}
      </HeroesWrapper>
      <ChoosedHero>Your choise:</ChoosedHero>
    </Wrapper>
  );
};

export default ChooseFighter;
