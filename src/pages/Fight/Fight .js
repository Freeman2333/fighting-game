import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sample, sampleSize } from "lodash";

import {
  FightWrapper,
  FightHeading,
  FightTimer,
  VersusWrapper,
  IconsAdditional,
  IconsWrapper,
  Icon,
} from "./styles";
import { HeroContext } from "../../context/HeroContext";
import { useHeroes } from "../../hooks/useHeroes";
import { HeroCard } from "../../components/HeroCard";
import { emojies as mockEmojies } from "./../../mocks/emojies";
import { updateEmojiByIndex } from "../../helpers";

const Fight = () => {
  const navigate = useNavigate();
  const { selectedHero } = useContext(HeroContext);
  const { getRandomHero } = useHeroes();

  const [emojies, setEmojies] = useState(sampleSize(mockEmojies, 6));
  const [lastActiveIcon, setLastActiveIcon] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(4);
  const [randomHero] = useState(getRandomHero());

  useEffect(() => {
    if (!selectedHero?.id) {
      navigate("/");
    }
  }, [navigate, selectedHero?.id]);

  useEffect(() => {
    const events = ["keyup", "keydown"];

    const handleKeyboard = (event) => {
      const index = updateEmojiByIndex(event);
      if (Number(index) !== -1) {
        setLastActiveIcon(index);
        setEmojies((prev) =>
          prev.map((emojie, idx) =>
            idx === index ? sample(mockEmojies) : emojie
          )
        );
      }
    };

    events.forEach((event) => document.addEventListener(event, handleKeyboard));

    return () =>
      events.forEach((event) =>
        document.removeEventListener(event, handleKeyboard)
      );
  }, []);

  useEffect(() => {
    if (timeRemaining <= 0) {
      navigate("/");
    }

    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [navigate, timeRemaining]);

  return (
    <FightWrapper>
      <FightHeading>
        {selectedHero?.hero} vs {randomHero.hero}
      </FightHeading>
      <FightTimer>Наваляю тобі за {timeRemaining} секунди</FightTimer>
      <VersusWrapper>
        <HeroCard hero={selectedHero} large withoutText />
        <HeroCard hero={randomHero} large withoutText />
      </VersusWrapper>
      <IconsWrapper>
        {emojies.map((em, idx) => (
          <Icon key={idx} isLastChoosed={lastActiveIcon === idx}>
            {em}
          </Icon>
        ))}
      </IconsWrapper>
      <IconsAdditional>Бий! "q", "w", "e", "r", "t", "y"</IconsAdditional>
    </FightWrapper>
  );
};

export default Fight;
