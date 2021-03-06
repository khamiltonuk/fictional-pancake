import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 100%;
  font-weight: normal;
`;

function Rules() {
  return (
    <>
      <Title>Rules</Title>
      <p>
        &quot;It&apos;s very simple. Scissors cuts paper, paper covers rock,
        rock crushes lizard, lizard poisons Spock, Spock smashes scissors,
        scissors decapitates lizard, lizard eats paper, paper disproves Spock,
        Spock vaporizes rock, and as it always has rock crushes scissors&quot;
      </p>
    </>
  );
}

export default Rules;
