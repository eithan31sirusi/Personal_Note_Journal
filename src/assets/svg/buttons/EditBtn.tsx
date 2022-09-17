import React, { useState } from "react";

interface IProps {
  children?: React.ReactNode;
  ClickHandler?: (e: any) => void;
}

const EditBtn: React.FC<IProps> = ({ ClickHandler }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <svg
      id="svg2"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 340 340"
      onClick={ClickHandler}
      style={{
        cursor: "pointer",
        // box shadwo effect
        boxShadow: isHovered ? "0px 0px 10px rgba(255, 255, 255, 1)" : "none",
        transition: "all 0.5s ease-in-out",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="293.87"
          y1="237.61"
          x2="291.3"
          y2="188.13"
          gradientTransform="matrix(1.06, 0.09, 0.13, -1.51, -101.54, 580.73)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#897353" />
          <stop offset="0.15" stopColor="#9e8967" />
          <stop offset="0.67" stopColor="#dbd0ab" />
          <stop offset="1" stopColor="#c5ae70" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="-317.37"
          y1="639.96"
          x2="-319.94"
          y2="590.48"
          gradientTransform="matrix(0.4, 0.04, 0.05, -0.59, 340.66, 660.96)"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-3"
          x1="-323.65"
          y1="642.07"
          x2="-323.7"
          y2="610.41"
          gradientTransform="matrix(0.4, 0.04, 0.05, -0.59, 340.66, 660.96)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#c6b380" />
          <stop offset="0.28" stopColor="#dad3b8" />
          <stop offset="0.59" stopColor="#d1c79f" />
          <stop offset="1" stopColor="#a38f6b" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-4"
          x1="288"
          y1="237.99"
          x2="286.15"
          y2="207.72"
          gradientTransform="matrix(1.06, 0.09, 0.13, -1.51, -101.54, 580.73)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#bdaa80" />
          <stop offset="0.28" stopColor="#ccc39d" />
          <stop offset="0.59" stopColor="#cdc296" />
          <stop offset="1" stopColor="#927e5b" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-5"
          x1="107.84"
          y1="17.1"
          x2="294.37"
          y2="1.75"
          gradientTransform="matrix(1, 0, 0, -1, -22.09, 176.91)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#dfd5b8" />
          <stop offset="0.34" stopColor="#ebe3c2" />
          <stop offset="0.64" stopColor="#e2d9bb" />
          <stop offset="1" stopColor="#ccbc92" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-6"
          x1="183.71"
          y1="97.17"
          x2="157.9"
          y2="-163.2"
          gradientTransform="matrix(1, 0, 0, -1, -22.09, 176.91)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ede7e7" />
          <stop offset="1" stopColor="#e7e0e0" stopOpacity="0" />
        </linearGradient>
        <clipPath id="clipPath">
          <path
            id="SVGID"
            d="M152,72.24l-47.2,16.21c-4.66,9.29-11.52,23.38-19,39.9h190.6c5.18-11,10.12-20.75,14.36-28.43a63.35,63.35,0,0,0,7.35-27.68Z"
            fill="none"
          />
        </clipPath>
        <linearGradient
          id="linear-gradient-7"
          x1="279.05"
          y1="83.86"
          x2="279.05"
          y2="19.56"
          gradientTransform="matrix(1, 0.09, 0.07, -1.33, -18.58, 94.05)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#694f33" />
          <stop offset="1" stopColor="#694f33" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-8"
          x1="278.82"
          y1="118.4"
          x2="276.25"
          y2="68.92"
          gradientTransform="matrix(1, 0, 0, -1, -22.09, 176.91)"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-9"
          x1="285.68"
          y1="106.44"
          x2="284.94"
          y2="83.1"
          gradientTransform="matrix(1, 0, 0, -1, -22.09, 176.91)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#baa877" />
          <stop offset="0.34" stopColor="#a38f6b" />
          <stop offset="0.55" stopColor="#d5c89d" />
          <stop offset="1" stopColor="#c2af7d" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-10"
          x1="272.78"
          y1="120.51"
          x2="272.73"
          y2="88.85"
          gradientTransform="matrix(1, 0, 0, -1, -22.09, 176.91)"
          xlinkHref="#linear-gradient-3"
        />
        <linearGradient
          id="linear-gradient-11"
          x1="181.7"
          y1="141.96"
          x2="184.81"
          y2="78.19"
          xlinkHref="#linear-gradient-5"
        />
        <linearGradient
          id="linear-gradient-12"
          x1="201.16"
          y1="509.38"
          x2="197.42"
          y2="293.68"
          gradientTransform="matrix(1.05, 0, 0, -0.15, -54.44, 114.81)"
          xlinkHref="#linear-gradient-6"
        />
        <clipPath id="clipPath-2">
          <path
            id="SVGID-2"
            data-name="SVGID"
            d="M44.26,252.29c-3.45,26.78,1.32,46.27,21.53,48.12l182,8.72c-19.16-1.55-21.45-25.26-15.35-56.84Z"
            fill="none"
          />
        </clipPath>
        <linearGradient
          id="linear-gradient-13"
          x1="215.11"
          y1="-3104.25"
          x2="211.87"
          y2="-3338.48"
          gradientTransform="matrix(0.99, 0.02, 0, 0.15, -88.62, 755.04)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#beae82" />
          <stop offset="1" stopColor="#d9cece" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-14"
          x1="215.15"
          y1="-1189.09"
          x2="213.47"
          y2="-1394.26"
          gradientTransform="matrix(0.99, -0.03, 0, 0.15, -51.28, 275.24)"
          xlinkHref="#linear-gradient-13"
        />
        <linearGradient
          id="linear-gradient-15"
          x1="-426.12"
          y1="293.81"
          x2="-309.99"
          y2="293.81"
          gradientTransform="matrix(0.99, 0.16, 0.16, -0.99, 572.57, 444.52)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-16"
          x1="-449.07"
          y1="72.88"
          x2="-309.29"
          y2="72.88"
          gradientTransform="translate(625.43 102.56) rotate(9.45)"
          xlinkHref="#linear-gradient-15"
        />
      </defs>
      <title>Edit Page</title>
      <rect
        id="rect3755"
        x="15.81"
        y="15.81"
        width="310"
        height="310"
        rx="27.14"
        fill="#666"
        opacity="0.63"
      />
      <rect
        x="5"
        y="5"
        width="331.62"
        height="331.62"
        rx="26.55"
        fill="none"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
      />
      <g id="layer1">
        <path
          id="path12145-5-6"
          d="M245.79,308.89c8.12,1.06,17.32-3.3,19.7-23.14s-2.95-33.75-11.82-35c-9.29-.23-43.27-3.25-43.81,8-.39,39.79,21,48.39,35.93,50.14Z"
          fill="url(#linear-gradient)"
        />
        <path
          id="path12145-5-9-1-1"
          d="M229.73,279.54c.47,4.21-2.23,5.79-.54,8.44s14.82,6.07,17.31,6.11c3.69,1.58,7.13-2.9,4.84-10.5a147.56,147.56,0,0,1-21.61-4Z"
          fill="#ae8a69"
        />
        <g id="g4577">
          <path
            id="path12145-5-6-5"
            d="M247.09,293.28c3,.41,6.5-1.3,7.39-9.11s-1.11-13.27-4.44-13.76-16.22-1.28-16.42,3.15c-.15,15.64,7.88,19,13.47,19.72Z"
            fill="url(#linear-gradient-2)"
          />
          <path
            id="path12673-0-8-4"
            d="M235.46,270.42l-1.4,13.44c3.86.47,12.63,3.16,12.92,3.25-2.13-.66-2.51-4.05-2.33-8.06.2-4.38,2-9,5.28-8.66h0c-4.66-.82-11-.39-14.47,0ZM247,287.11l.09,0h0l-.1,0Z"
            fill="url(#linear-gradient-3)"
          />
        </g>
        <path
          id="path12145-5-97-5-6"
          d="M246.05,308.87c10.18.48,21.17-4.05,22-22.35s-7.22-30.68-18.38-31.31-54.1-.38-53.58,10c3.7,36.41,49.93,43.7,49.93,43.7Z"
          fill="none"
        />
        <path
          id="path12673-0-8"
          d="M214.54,250.69,211.05,285c10.29,1.2,33.68,8,34.44,8.27-5.66-1.68-6.7-10.3-6.21-20.51.53-11.14,5.34-23,14.09-22v0c-11.14-1.46-29.7.42-38.83,0Zm31,42.53.26.08v0l-.26-.06Z"
          fill="url(#linear-gradient-4)"
        />
        <path
          id="path12145-5-9-7-2-7"
          d="M231.54,281.7c2.06,7.65,7.44,13.23,13.65,13,4.94.42,9.32-5.91,5.67-12.72-6.46,0-13.28.72-19.32-.28Z"
          fill="none"
        />
        <path
          id="path12145-5-97-9"
          d="M245.79,308.89c8.12,1.06,17.32-3.3,19.7-23.14s-2.95-33.75-11.82-35-43.27-3.25-43.81,8c-.39,39.79,35.93,50.14,35.93,50.14Z"
          fill="none"
        />
        <path
          id="path12673-0-2-9-6"
          d="M201.24,253.27l-.89,35.79c12.92.48,42.7,5.34,43.67,5.5-7.21-1.2-9.41-9-9.88-18.38-.51-10.22,4.22-21.34,15.19-21v0s-42.8.11-48.09-1.91ZM244,294.56l.33.06v0l-.33,0Z"
          fill="none"
        />
        <path
          id="path12145-5-9-7-3"
          d="M236.68,278.59c.95,8.42,4.74,14.77,9.73,14.84,3.92.72,8-5.93,5.72-13.53-5.18-.38-10.7.09-15.45-1.31Z"
          fill="none"
        />
        <path
          id="path4604"
          d="M291.48,93.64,296,87.33l.41-2.89-5.19,7.21Z"
          fill="#af9c76"
        />
        <path
          id="path4608"
          d="M291.63,90.43l.47,1.71.1,5.11-1.29,2.43Z"
          fill="#b4a27b"
        />
        <path
          id="path4604-2"
          d="M248.93,155.2l16.36-.45.44-1.15-16.25.93Z"
          fill="#907b5a"
        />
        <path
          id="path4631"
          d="M256,159.19l7.74-.93.42-1.34-8.47,1.34Z"
          fill="#907b5a"
        />
        <path
          id="path4633"
          d="M57,239.48l-12.31,6,.87-2.56,5.85-3.36Z"
          fill="#877355"
        />
        <path
          id="path4635"
          d="M71.06,45.74l-10-.18,1.21-1.06,9,.49Z"
          fill="#877355"
        />
        <path
          id="path12143"
          d="M269.4,32.81c-1,0-2,0-3,.14l-161.6,55.5C90.27,117.32,54.67,192,45.44,244.53l4.78-3.13-5.54,7.86c-4.2,28.33.14,49.23,21.11,51.15l182,8.72c-36.16-2.92-12.25-84.78,14.74-149.49l-4.85-1,5.69-1c.18-.44.37-.87.55-1.31L250,154.91l14.89-.9c9.2-21.57,18.55-40.85,25.85-54.1.41-.74.8-1.5,1.17-2.27V92l4.24-6.1c6-24.1-1.31-53.13-26.75-53.07Z"
          fill="url(#linear-gradient-5)"
        />
        <path
          id="path12673-0-2-4"
          d="M215.06,246.08l-4,38.87c10.29,1.2,33.68,8,34.44,8.27-5.66-1.68-6.7-10.3-6.21-20.51.53-11.14,5.34-23,14.09-22v0s-34.27-2.13-38.31-4.6Zm30.43,47.14.26.08v0l-.26-.06Z"
          fill="none"
        />
        <path
          id="path13153"
          d="M146.08,100.26c-41.1,16.25-41.46,50.8-51.37,93.87-5.61,24.38-34,64.3-9.44,59.64,33.76-6.41,50.92,2.31,94.46,17.12,25.23,8.58,23.66-45.91,28.93-72,6.2-30.71,26.56-49.14,8.86-75-16-23.31-45.16-34-71.44-23.61Z"
          fill="url(#linear-gradient-6)"
        />
        <g clipPath="url(#clipPath)">
          <path
            id="rect13642"
            d="M101.64,74.15,280.48,65.9c6.75,15.12-.09,35.33-18.86,33.5L101.33,96.69Z"
            fill="#ac8d7b"
            opacity="0.64"
          />
        </g>
        <path
          id="rect4032-1"
          d="M269.4,32.81c-1,0-2,0-3,.14L227.76,46.2l-2.27,44.12,66.42,6.11V92l4.23-6.1c6-24.1-1.3-53.15-26.74-53.09Z"
          fill="url(#linear-gradient-7)"
        />
        <path
          id="path12145-5"
          d="M266.4,98.25c7.68.24,16-3.13,16.61-16.3s-5.44-22-13.85-22.34-40.75.27-40.36,7.7c2.78,26.16,37.6,30.94,37.6,30.94Z"
          fill="url(#linear-gradient-8)"
        />
        <path
          id="path12145-5-9-1"
          d="M249.05,79.87c.78,2.74-1.62,3.93.17,5.58s14.35,3.16,16.69,3c3.57.83,6.44-2.3,3.69-7.17a193.69,193.69,0,0,1-20.55-1.46Z"
          fill="#ae8a69"
        />
        <path
          id="path12145-5-9"
          d="M255.48,78.85c1.55,5.48,5.61,9.44,10.28,9.21,3.73.25,7-4.34,4.28-9.21-4.87,0-10,.66-14.56,0Z"
          fill="url(#linear-gradient-9)"
        />
        <path
          id="path12673-0"
          d="M232,84.46c9.72.21,32.16,3.4,32.89,3.51-5.44-.79-7.09-6.39-7.44-13.12.12-11.14,5.7-14.82,11.91-15.72,0,0-32.09.77-36.07,1.23ZM264.88,88l.25,0h0Z"
          fill="url(#linear-gradient-10)"
        />
        <path
          id="rect12140"
          d="M266.38,33c-85.19,3.13-141.1,7.32-193.95,5.84A24.55,24.55,0,0,0,62,45l8.48.4L60,47.3C48.13,62.78,56,91.09,72.43,92.4c65.5-1.91,130.65,2.13,194,5.85-22.44-6.09-24.58-57.26,0-65.3Z"
          fill="url(#linear-gradient-11)"
        />
        <path
          id="path12145-5-0-3"
          d="M246.34,309c7.61,1,16.41-2.88,19.21-20.67s-1.83-30.3-10.16-31.48c0,0-46.4-5-54.48,5.75s22.13,37.08,21.72,42.13Z"
          fill="none"
        />
        <path
          id="path12145-5-9-3-9"
          d="M238.6,281.75c.65,7.56,4.05,13.27,8.75,13.37,3.68.66,7.72-5.29,5.77-12.12-4.87-.36-10.09,0-14.52-1.25Z"
          fill="none"
        />
        <path
          id="path12673-0-7-9"
          d="M219.12,252.47l-4.87,34.86c9.67,1.13,31.53,7.39,32.24,7.59-5.29-1.53-6-9.27-5.28-18.43.81-10,5.68-20.59,13.9-19.68-10.66-2.08-26.55-.45-36.2-1.84Zm27.37,42.45.24.07h0l-.24-.06Z"
          fill="none"
        />
        <path
          id="path12143-6"
          d="M266.36,33c33.45-3,40.11,42.25,24.38,67-33.21,52.19-92.43,205.21-43,209.2l-182-8.71c-59.95-5.48,16-166.22,39-212Z"
          fill="none"
        />
        <path
          id="path12145-5-97"
          d="M266.4,98.25c7.68.24,16-3.13,16.61-16.3s-5.44-22-13.85-22.34-40.75.27-40.36,7.7c2.78,26.16,37.6,30.94,37.6,30.94Z"
          fill="none"
        />
        <path
          id="path12145-5-9-7"
          d="M255.48,78.85c1.55,5.48,5.61,9.44,10.28,9.21,3.73.25,7-4.34,4.28-9.21-4.87,0-10,.66-14.56,0Z"
          fill="none"
        />
        <path
          id="path12673-0-2"
          d="M232.66,58.7,232,84.46c9.73.22,32.16,3.41,32.89,3.51-5.43-.78-7.09-6.39-7.44-13.12-.38-7.35,3.18-15.39,11.45-15.24v0s-32.25.52-36.23-.89ZM264.88,88l.25,0h0Z"
          fill="none"
        />
        <path
          id="rect12140-5"
          d="M72.42,38.79c52.86,1.48,108.78-2.71,194-5.84-24.58,8-22.44,59.21,0,65.3-63.3-3.72-128.46-7.76-194-5.85-20.51-1.63-27.65-45.18,0-53.61Z"
          fill="none"
        />
      </g>
      <g id="layer4">
        <path
          id="path13153-8"
          d="M82.51,42.81c-3.92,5-12.24,12.59-6,21.07,31.08-4.46,102.72-3.67,156.58,2.64-4.09-5.94-4-19.83,2-25.36-41.19,4.13-114,5.9-152.61,1.65Z"
          fill="url(#linear-gradient-12)"
        />
        <g clipPath="url(#clipPath-2)">
          <path
            id="path13153-8-1"
            d="M60.25,292.38c-3.59-5.11-14.9-15.07-8.83-23.4,29.19,5.16,105.51,15.8,156.41,10.71-4,5.85.73,14.58,6.24,20.24-39.39-.4-117.49-4.37-153.81-7.55Z"
            opacity="0.87"
            fill="url(#linear-gradient-13)"
          />
        </g>
        <path
          id="path13153-8-1-9"
          d="M75.08,88.6C71.22,83.7,59.37,74.38,65,65.73,94.4,69.27,184.13,79.86,234.67,72c-3.65,6.06,4,15.35,9.86,20.7-38.92-2.54-132.34-9.6-169.45-4.07Z"
          opacity="0.53"
          fill="url(#linear-gradient-14)"
        />
      </g>
      <g id="layer2">
        <path
          id="path13139"
          d="M251.36,83.45l.15.35A33.75,33.75,0,0,0,258,94.17c2.16,2.27,4.94,4.25,8.17,4.65h0a16.45,16.45,0,0,0,8.07-.91,13.34,13.34,0,0,0,5.48-4.23h0a18.26,18.26,0,0,0,3-6.39,27,27,0,0,0,.82-7.49,27.88,27.88,0,0,0-4-14.22,15.33,15.33,0,0,0-4.48-4.73h0a10.46,10.46,0,0,0-5.92-1.71h0a12.58,12.58,0,0,0-5.57,1.43A11.66,11.66,0,0,0,259.75,64h0a15.44,15.44,0,0,0-2.24,4.75,20.66,20.66,0,0,0-.77,5.36,19,19,0,0,0,2.42,9.92,10.07,10.07,0,0,0,3,3.25h0a7.16,7.16,0,0,0,4,1.17,4.77,4.77,0,0,0,2.75-.89,4.86,4.86,0,0,0,1.62-2.2A8,8,0,0,0,271,82.1c0-.1,0-.2,0-.3a9.24,9.24,0,0,0-.45-2.06c-.18-.52-.35-.82-.4-.8a2.69,2.69,0,0,0,.12.88,17.63,17.63,0,0,1,.31,2,2.64,2.64,0,0,0,0,.29,7.36,7.36,0,0,1-.46,3.1,4.1,4.1,0,0,1-4,2.77,6.6,6.6,0,0,1-3.75-1.12,9.49,9.49,0,0,1-2.8-3.1h0a18.23,18.23,0,0,1-2.26-9.63,19.75,19.75,0,0,1,.77-5.19,14.66,14.66,0,0,1,2.18-4.52h0A10.94,10.94,0,0,1,264,61.21a11.79,11.79,0,0,1,5.25-1.31h0a9.62,9.62,0,0,1,5.45,1.62A14.42,14.42,0,0,1,278.87,66a27,27,0,0,1,3.79,13.79,26,26,0,0,1-.84,7.21,17.26,17.26,0,0,1-2.89,6,12.17,12.17,0,0,1-5.07,3.85,15.25,15.25,0,0,1-7.51.78c-2.84-.32-5.36-2.19-7.43-4.34h0a32.6,32.6,0,0,1-6.21-10c-.05-.12-.09-.23-.14-.34l-.16-.4a45.77,45.77,0,0,1-2-28A40.63,40.63,0,0,1,257,39.88h0A18.7,18.7,0,0,1,262,35.23a13.1,13.1,0,0,1,6-2c6.38-.42,13,1.14,18,5.11h0c5.26,4.17,8.41,10.61,9.82,17.23a75.49,75.49,0,0,1,2,18.31,52.64,52.64,0,0,1-1.11,8.74l-.06.29a29.56,29.56,0,0,0-.61,4.4c.1,0,.68-2.76,1-4.31l.06-.29a54.4,54.4,0,0,0,1.19-8.81,77,77,0,0,0-1.86-18.46c-1.38-6.73-4.55-13.33-10-17.69h0c-5.14-4.14-12-5.8-18.54-5.41a13.91,13.91,0,0,0-6.47,2.07,19.82,19.82,0,0,0-5.23,4.85h0a41.19,41.19,0,0,0-6.84,15A46.91,46.91,0,0,0,251.2,83c.05.13.11.27.16.41Z"
          fill="#ece1d9"
        />
        <path
          id="path13139-1"
          d="M291.91,97.64a27.06,27.06,0,0,0-2.35,4c-.07.14-.14.28-.22.41-6.31,12-12.18,24.14-17.74,36.46-2.28,5.05-4.56,10.28-6.8,15.54l.51.7c2.13-5.12,4.58-10.89,6.84-16,5.51-12.34,11.32-24.54,17.57-36.51l.22-.42a29,29,0,0,0,2-4.16Zm-28.09,58.68-.57,1.33.56.57c.15-.37.64-1.46.79-1.82Zm-1.39,3.29c-2.72,6.51-5.33,13-7.75,19.22-4.58,12.08-9.14,24.37-12.63,34.86-1.53,4.6-3,9.2-4.36,13.85-1,3.52-2,7.07-2.86,10.65-2,8.31-3.71,16.68-4.92,25.15a109.69,109.69,0,0,0-1.32,22c.07,1.2.18,2.39.32,3.58l.09.7a42.43,42.43,0,0,0,.94,4.75,25.57,25.57,0,0,0,3.07,7.25,16.33,16.33,0,0,0,5,5.07,17.73,17.73,0,0,0,7.24,2.47,15.46,15.46,0,0,0,4.75-.12,13.79,13.79,0,0,0,4.13-1.48,18.19,18.19,0,0,0,6.38-6.25,33.69,33.69,0,0,0,4-9.28,54.28,54.28,0,0,0,1.77-10.88,61.11,61.11,0,0,0-.3-11.07,43.94,43.94,0,0,0-2.26-9.86,20.87,20.87,0,0,0-4.17-7.23,10.83,10.83,0,0,0-2.8-2.18,8.43,8.43,0,0,0-3.29-1,10.08,10.08,0,0,0-6.07,1.54,14.25,14.25,0,0,0-4.39,4.78,27.81,27.81,0,0,0-2.83,6.87,44.8,44.8,0,0,0-1.38,8,49.05,49.05,0,0,0,0,8,34.83,34.83,0,0,0,1.28,7.15,15.27,15.27,0,0,0,2.56,5.23,6.77,6.77,0,0,0,1.75,1.58,4.83,4.83,0,0,0,2.11.69,7.19,7.19,0,0,0,6.17-3.1,14.39,14.39,0,0,0,2.28-9.18,29.67,29.67,0,0,0-1-6.69,8.71,8.71,0,0,0-1.82-3.66,3.71,3.71,0,0,0-1.15-.84,2.73,2.73,0,0,0-1.23-.21,4.08,4.08,0,0,0-2.4,1.19,10.86,10.86,0,0,0-2.83,6.67c-.37,2.78.12,8.75,2.28,9.12-1.87-.89-2.22-5.4-1.84-9.07a10.42,10.42,0,0,1,2.73-6.38,3.55,3.55,0,0,1,2.1-1.05,2.3,2.3,0,0,1,1,.18,3.1,3.1,0,0,1,1,.73,8.19,8.19,0,0,1,1.69,3.46,28.9,28.9,0,0,1,.9,6.57,13.88,13.88,0,0,1-2.2,8.82,6.57,6.57,0,0,1-5.65,2.83,4.16,4.16,0,0,1-1.82-.62,6.29,6.29,0,0,1-1.6-1.45,14.71,14.71,0,0,1-2.42-5,34.43,34.43,0,0,1-1.22-7,47.73,47.73,0,0,1,.05-7.93,43.24,43.24,0,0,1,1.38-7.83,26.68,26.68,0,0,1,2.76-6.66,13.36,13.36,0,0,1,4.16-4.48,9.21,9.21,0,0,1,5.58-1.39,7.52,7.52,0,0,1,2.93.86,9.73,9.73,0,0,1,2.56,2,20.1,20.1,0,0,1,4,6.95,42.39,42.39,0,0,1,2.17,9.66,58.27,58.27,0,0,1,.25,10.89,53.34,53.34,0,0,1-1.78,10.67,32.66,32.66,0,0,1-3.88,9,17.16,17.16,0,0,1-6,5.84,12.91,12.91,0,0,1-3.81,1.34,14,14,0,0,1-4.39.09,16.32,16.32,0,0,1-6.72-2.31,15.22,15.22,0,0,1-4.65-4.73,24.33,24.33,0,0,1-2.87-6.89,40.31,40.31,0,0,1-.89-4.61l-.09-.68c-.14-1.16-.24-2.33-.32-3.5a109.17,109.17,0,0,1,1.2-21.79c1.17-8.42,2.88-16.76,4.79-25.06.82-3.57,1.8-7.09,2.82-10.61q2-6.95,4.27-13.84c3.83-11.74,8-23.35,12.45-34.88,2.6-6.5,5.17-12.94,7.79-19.33Z"
          fill="#ece1d9"
        />
        <path
          id="path3235"
          d="M72.87,92.33C122.35,90.07,180.14,91,265.05,98.2c-66.69-5-130.22-6.59-192.18-5.87Z"
          fill="#e8dccf"
        />
        <path
          id="path4364"
          d="M72,38.76a3,3,0,0,0-.56.12l-.06,0a23.23,23.23,0,0,0-7.56,4,34.86,34.86,0,0,0-2.68,2.62L62.4,45a22,22,0,0,1,9.07-5.71l.08,0c.4-.14.72-.33.7-.42s-.11-.06-.26-.05ZM60.48,47.2l-1,.18A23.16,23.16,0,0,0,58,49.66a32.91,32.91,0,0,0-4.33,16.19V66c0,.44,0,.87,0,1.31a35.76,35.76,0,0,0,1.51,9A29.3,29.3,0,0,0,58.89,84a21.19,21.19,0,0,0,5.72,5.76,17.74,17.74,0,0,0,6.77,2.64l.09,0c.43.06.8,0,.82-.07s-.35-.22-.77-.3h-.07a17.17,17.17,0,0,1-6.54-2.72,20.7,20.7,0,0,1-5.44-5.71A28.17,28.17,0,0,1,56.06,76a34.88,34.88,0,0,1-1.27-8.73c0-.42,0-.85,0-1.27v-.11A31.92,31.92,0,0,1,58.63,50a25.61,25.61,0,0,1,1.85-2.84Z"
          fill="#ffe6d5"
        />
        <path
          id="path4420"
          d="M102.85,92.24a10.76,10.76,0,0,0-1.3,2.28l-.1.23L87.32,123.8Q79.84,139.94,73,156.37c-5.16,12.37-10,24.87-14.45,37.53-.48,1.37-1,2.75-1.42,4.12,0,.13-.07.25-.12.38-3.64,11-6.93,22.11-9.53,33.41-1,4.36-1.89,9.1-2.63,13.51l.93-1c.74-4.14,1.61-8.25,2.58-12.33,2.66-11.25,6-22.32,9.73-33.26,0-.13.08-.25.13-.38.45-1.37.91-2.74,1.38-4.12,4.32-12.66,9.11-25.18,14.18-37.57q6.74-16.45,14.12-32.64l13.92-29.14.12-.23a10.11,10.11,0,0,0,1-2.43ZM45,248.83l-1,1.41a123.27,123.27,0,0,0-1.22,15.11A66,66,0,0,0,43.86,279a34,34,0,0,0,3.91,10.84,21.52,21.52,0,0,0,7.17,7.4,23.27,23.27,0,0,0,7.9,2.93l.27.05a8,8,0,0,0,2.63.16,15.32,15.32,0,0,0-2.56-.52l-.26-.05a22.76,22.76,0,0,1-7.76-2.94,21,21,0,0,1-7-7.28,33.47,33.47,0,0,1-3.78-10.71,66,66,0,0,1-1-13.55,123.83,123.83,0,0,1,1.44-15.83c0-.23.06-.47.1-.7Z"
          fill="#ece1d9"
        />
      </g>
      <g id="g3">
        <path
          id="path5"
          d="M262.27,316.33c0,1.74,19.18.92,21.15.54,3.27-.62-6.08-2.09-6.88-2.12-1.28-.06-14.28-.61-14.27,1.58"
          fill="#73bf44"
        />
        <path
          id="path12"
          d="M286.86,312.86V288.52c0-1.58.9-1,2.4-1h20c2,0,4.29.27,6.08-.94,2.77-1.87,2.44-5,2.44-7.88,0-4.46,2-14.89-2.44-17.88-3.86-2.61-12.36-.94-16.67-.94-2,0-11.76,1.2-11.76-1V239.56c0-5.32,0-10.56-6.93-10.56h-9.52c-2.35,0-5.58-.51-7.82.44-5.17,2.19-3.38,11.6-3.38,16,0,1.15.18,14.48-.17,14.48H241.25c-4.7,0-12.91-1.3-12.91,5.77V282c0,7.12,9.15,5.59,13.76,5.59,1.38,0,17.11-.17,17.11.17v20.15c0,2.18-.44,5.11.43,7.18,1.53,3.62,5.15,3.38,8.39,3.38,4.92,0,18.82,2.49,18.82-5.54"
          fill="#73bf44"
        />
        <path
          id="path14"
          d="M232.3,263.17c1.74,0,.93,19.18.55,21.16-.63,3.27-2.09-6.08-2.13-6.88-.06-1.27-.6-14.28,1.58-14.28"
          fill="#73bf44"
        />
        <path
          id="path16"
          d="M315.41,263.17c1.74,0,.93,19.18.55,21.16-.63,3.27-2.09-6.08-2.13-6.88,0-1.27-.59-14.28,1.58-14.28"
          fill="#73bf44"
        />
        <path
          id="path18"
          d="M262.6,284.65c1.78,0,.9,27.61.54,30.16-.24,1.69-.86,1.52-1.22,0a54.85,54.85,0,0,1-.93-11c0-1.47-.53-19.14,1.61-19.14"
          fill="#73bf44"
        />
        <path
          id="path20"
          d="M288.16,263.35c0,1.78,24,.86,26.22.59,1-.12,2.38-.65.65-1.18-3-.92-6.43-.91-9.54-1-1.4,0-17.33-.57-17.33,1.6"
          fill="#73bf44"
        />
        <path
          id="path22"
          d="M232.3,263.17c0-1.5,28.53-1.2,28.53,0s-28.53,3.74-28.53,0"
          fill="#73bf44"
        />
        <path
          id="path24"
          d="M262.27,233.21c0,1.74,19.18.92,21.15.55,3.27-.63-6.08-2.09-6.88-2.13-1.28-.06-14.28-.6-14.27,1.58"
          fill="#73bf44"
        />
        <path
          id="path26"
          d="M262.27,233.21c-1.51,0-1.21,28.31,0,28.31s3.72-28.31,0-28.31"
          fill="#73bf44"
        />
        <path
          id="path28"
          d="M284.2,232.57c-1.5,0-.84,16.23-.83,17.56,0,2.48-.3,5.46.45,7.87.59,1.86,1.51-3,1.55-3.29.28-2.24,2.23-22.15-1.17-22.14"
          fill="#73bf44"
        />
        <path
          id="path30"
          d="M284.2,285.53c-1.3,0-.84,15.46-.84,16.81a112.22,112.22,0,0,0,.22,11.6c.22,2.12,1,2.32,1.45.14s2.39-28.56-.83-28.55"
          fill="#73bf44"
        />
        <path
          id="path32"
          d="M232.6,284.17c0-1.51,16.23-.85,17.56-.84,2.48,0,5.46-.29,7.88.46,1.86.58-3,1.51-3.3,1.54-2.23.29-22.15,2.23-22.14-1.16"
          fill="#73bf44"
        />
        <path
          id="path34"
          d="M285.68,284.17c0-1.32,14.87-.84,16.15-.84a112.22,112.22,0,0,1,11.6.22c2.12.22,2.32,1,.14,1.45s-27.89,2.45-27.89-.83"
          fill="#73bf44"
        />
        <path
          id="path36"
          d="M285.7,230.15c-3-3-9.71-1.81-13.55-1.81-4.66,0-12.19-1.28-13.47,4.94-.82,4-.13,8.65-.13,12.66v13.28H240.82c-5.33,0-13.14-1-13.14,6.71,0,5.27-.52,10.82,0,16.06,0,8,10.64,6.19,15.77,6.19,1.81,0,15.1-.74,15.1.66v19.45c0,6,.9,10.76,8.15,10.76h9.79c2.62,0,6,.5,8.27-1,4.46-3,2.75-12,2.75-16.56v-10.1c0-2.08-.71-3.17,1.48-3.17h20c2.25,0,4.66.27,6.64-1.06,3-2,2.73-5.29,2.73-8.42,0-4.8,2-15.24-2.73-18.43-2-1.33-4.39-1.06-6.64-1.06H289c-2.19,0-1.48-1.09-1.48-3.17v-20c0-2.17-.15-4.22-1.81-5.88M229,282V265.92c0-6.93,8.37-5.4,13-5.4h17.7c.34,0,.17-13.23.17-14.36,0-4-1.82-13.78,2.73-16,1.95-1,4.89-.5,7-.5H280c7.13,0,6.27,6.15,6.27,11.35V259.9c0,2.25,25.42-1.2,29,1.7,3.81,3.07,1.82,13.58,1.82,17.8,0,2.69.14,5.56-2.73,7-1.8.89-4.44.5-6.37.5H288c-1.4,0-1.84-.44-1.84,1v8.88c0,5.24.66,10.94,0,16.15,0,7.15-13,4.87-17.42,4.87-2.92,0-6.53.56-8.27-2.44-1.06-1.84-.64-4.64-.64-6.67V287.83c0-4.66-30.88,4.85-30.88-5.84"
          fill="#73bf44"
        />
      </g>
      <path
        d="M101,134.47a168.1,168.1,0,0,0-17.91,47.4c-.43,2-1.14,6.44,1.51,7.47,1.36.53,3.16-.83,4.24-1.55,2.77-1.83,4.6-5.68,6.39-8.42q3.41-5.24,6.43-10.7a175.28,175.28,0,0,0,11.7-26l-2.6,1.5A121.29,121.29,0,0,0,107.5,182c0-.45,2.54-1,2.6-1.5A34.73,34.73,0,0,1,119,160.85c-.63.69-2,.79-2.59,1.5a34.68,34.68,0,0,0-9,19.64l2.6-1.5a121.29,121.29,0,0,1,3.3-37.82c-.16.67-2.35.81-2.6,1.5a176.49,176.49,0,0,1-10.42,23.65q-2.94,5.51-6.27,10.8-1.67,2.64-3.42,5.22c-1.21,1.78-2.41,4.15-4.25,5.35L89,187.72c-4.63,1.66-3.56-6-3.07-8.23q1.77-8.15,4.34-16.07A169.83,169.83,0,0,1,103.63,133c-.41.74-2.17.74-2.59,1.5Z"
        fill="#231f20"
      />
      <path
        d="M140.58,148.82c-5.42-.57-12.42-.37-16.17,4.4-1.71,2.18-2.47,5.86-.33,8,1.78,1.79,6,1.89,5.47,5.3-.43,2.93-9.74,10.29-5.68,13,3.61,2.42,10.9-4.18,13.08-6.24A39,39,0,0,0,148.71,150l-2.6,1.5-.37,19.07c-.05,2.89-.62,11.47,4.83,8.87a12.72,12.72,0,0,0,6.19-6.17c3-5.81,6-11.64,9-17.47l-2.6,1.5,3.55,12c-.06-.2,2.67-1.25,2.6-1.5l-3.55-12c.06.2-2.44,1.19-2.6,1.5l-6,11.8c-1.74,3.37-3.23,8.13-6.51,10.34l2.55-1.47c-5.6,2.59-4.82-6.54-4.77-9.38l.36-18.59c0,.52-2.53.93-2.6,1.5a39,39,0,0,1-8.64,20,36.39,36.39,0,0,1-4.24,4.36c-.58.5-1.16,1-1.77,1.45-.4.31-.81.62-1.22.91.62-.33.58-.35-.13-.06-2.62.42-5.38.15-4.23-3.34.79-2.42,2.78-4.31,4.32-6.27,1.21-1.52,2.73-3.56,1.54-5.52-1.57-2.58-5.36-2-6.21-5.37-.71-2.86.88-5.9,3.2-7.51l-2.21,1.29c3.47-1.95,7.67-1.52,11.46-1.12.82.09,1.81-1.58,2.6-1.5Z"
        fill="#231f20"
      />
      <path
        id="path3761"
        d="M193.61,141.09S207.09,93.42,226,79.92s93.53-28.8,93.53-28.8S288,106.89,275.45,115.89s-45,3.61-45,3.61L244.88,133s-17.09,2.71-23.39,7.2-21.58-3.59-21.58-3.59"
        strokeMiterlimit="10"
        strokeWidth="5"
        stroke="url(#linear-gradient-15)"
      />
      <path
        id="path3763"
        d="M160.34,174.38s40.47-43.19,85.43-80.07,73.74-43.19,73.74-43.19"
        fill="none"
        strokeMiterlimit="10"
        strokeWidth="5"
        stroke="url(#linear-gradient-16)"
      />
    </svg>
  );
};

export default EditBtn;
