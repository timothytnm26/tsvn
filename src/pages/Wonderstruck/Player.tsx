import React from "react";
import hn2 from "../assets/imgs/HN4.png";
import player from "./../../assets/Chapter 3 Intro vuoong.mp4";
import { styled } from "styled-components";
const MediaWrapper = styled.div`
  max-height: 80vh;
`;
const Player = () => {
  return (
    <MediaWrapper>
      <video width="100%" height="100%" autoPlay controls={false} loop muted>
        <source src={player} type="video/mp4" />
      </video>
    </MediaWrapper>
  );
};

export default Player;
