import React from "react";

import { CardWrapper, CardHeading, CardBGImage } from "./styles";

export const HeroCard = ({
  hero,
  choosen,
  large = false,
  withoutText = false,
}) => {
  return (
    <CardWrapper choosen={choosen} isLarge={large}>
      {!withoutText && <CardHeading>{hero?.hero}</CardHeading>}
      <CardBGImage url={hero?.img} />
    </CardWrapper>
  );
};
