import styled, { keyframes } from "styled-components";

const enlarge = keyframes`
    0%,
    100% {
        height: 12em;
        top: -12em;
    }

    50% {
        height: 14em;
        top: -13em;
    }


`;
const move = keyframes`
    0%,
    100% {
        transform: rotate(2deg);
    }

    50% {
        transform: rotate(-2deg);
    }



`;
const lightBlink = keyframes`

to {
        filter: blur(6em) opacity(0.8);
    }



`;

export const CandleContainer = styled.div`
  margin: 0;
  height: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CandleBody = styled.div`
  width: 15em;
  height: 45em;
  font-size: 7px;
  background: linear-gradient(
    White,
    SeaShell,
    WhiteSmoke,
    Silver 50%,
    rgba(0, 0, 0, 0.6)
  );
  box-shadow: inset 2em -3em 5em rgba(0, 0, 0, 0.4), inset 2em 0em 5em;
  border-radius: 10em /4em;
  position: relative;
  display: flex;
  justify-content: center;
  top: 10em;

  &::before {
    content: "";
    position: absolute;
    width: inherit;
    height: 5em;
    border: 0.2em solid WhiteSmoke;
    border-radius: 50%;
    box-sizing: border-box;
    background: radial-gradient(#444444, White, SeaShell, WhiteSmoke, Silver);
    filter: opacity(0.4);
  }
`;

export const CandleStick = styled.div`
  position: absolute;
  width: 0.6em;
  height: 4em;
  top: -1.8em;
  background: linear-gradient(Khaki, #000000, PapayaWhip 90%);
`;

export const CandleFlame = styled.div`
  position: absolute;
  right: 5em;
  width: 2.4em;

  &::after {
    content: "";
    position: absolute;
    width: inherit;
    height: 12em;
    top: -12em;
    background: linear-gradient(#ffffff 80%, transparent);
    border-radius: 50% 50% 20% 20%;
    box-shadow: 0 -0.6em 0.4em darkorange;
    animation: ${enlarge} 5s linear infinite, ${move} 2s linear infinite;
  }
`;

export const CandleLight = styled.div`
  position: absolute;
  width: 10em;
  height: 18em;
  background-color: orangered;
  border-radius: 50%;
  top: -17em;
  filter: blur(6em);
  animation: ${lightBlink} 100ms infinite;
`;

/* body {
    margin: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
}

div.candle-body {
    width: 15em;
    height: 30em;
    font-size: 7px;
    background: linear-gradient(orange, darkorange, sienna, saddlebrown 50%, rgba(0, 0, 0, 0.6));
    box-shadow: inset 2em -3em 5em rgba(0, 0, 0, 0.4), inset 2em 0em 5em;
    border-radius: 10em /4em;
    position: relative;
    display: flex;
    justify-content: center;
    top: 10em;
}

div.candle-body::before {
    content: '';
    position: absolute;
    width: inherit;
    height: 5em;
    border: 0.2em solid darkorange;
    border-radius: 50%;
    box-sizing: border-box;
    background: radial-gradient(#444444, orange, darkorange, sienna, saddlebrown);
    filter: opacity(0.4);
}

span.stick {
    position: absolute;
    width: 0.6em;
    height: 4em;
    top: -1.8em;
    background: linear-gradient(#111111, #000000, orange 90%);
}

span.candle-flames {
    position: absolute;
    width: 2.4em;
}

span.candle-flames::after {
    content: '';
    position: absolute;
    width: inherit;
    height: 12em;
    top: -12em;
    background: linear-gradient(#ffffff 80%, transparent);
    border-radius: 50% 50% 20% 20%;
    box-shadow: 0 -0.6em 0.4em darkorange;
    animation: enlarge 5s linear infinite, move 6s linear infinite;
}

@keyframes enlarge {

    0%,
    100% {
        height: 12em;
        top: -12em;
    }

    50% {
        height: 14em;
        top: -13em;
    }

}

@keyframes move {

    0%,
    100% {
        transform: rotate(2deg);
    }

    50% {
        transform: rotate(-2deg);
    }

}

span.candle-light {
    position: absolute;
    width: 10em;
    height: 18em;
    background-color: orangered;
    border-radius: 50%;
    top: -17em;
    filter: blur(6em);
    animation: light-blink 100ms infinite;
}

@keyframes light-blink {

    to {
        filter: blur(6em) opacity(0.8);
    }


} */
