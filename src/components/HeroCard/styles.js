import styled, { css } from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  width: 100%;
  height: 100%;
  min-height: ${(props) => (props.isLarge ? "350px" : "100px")};

  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border: 1px solid transparent;

  transition: all 0.3s ease-in-out;
  background: rgba(0, 0, 0, 0.36);
  ${(props) =>
    props.choosen &&
    css`
      border: 1px solid green;
    `};
`;

export const CardHeading = styled.h2`
  font-size: 16px;
  padding-top: 10px;
  color: white;
`;

export const CardBGImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: top;
`;