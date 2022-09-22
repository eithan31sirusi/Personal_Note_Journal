import React, { useState } from "react";

interface IProps {
  children?: React.ReactNode;
  ClickHandler?: (e: any) => void;
}

const AddPageBtn: React.FC<IProps> = ({ ClickHandler }) => {
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
        width:"100%",
        height:"100%"
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="98.52"
          y1="128.99"
          x2="305.23"
          y2="128.99"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="48.5"
          y1="165.44"
          x2="302.11"
          y2="165.44"
          xlinkHref="#linear-gradient"
        />
      </defs>
      <title>Add Page</title>
      <rect
        id="rect3755"
        x="15"
        y="15"
        width="310"
        height="310"
        rx="27.14"
        fill="#666"
        opacity="0.63"
      />
      <path
        id="path3761"
        d="M101,231s10-90,40-120S301,31,301,31s-40,110-60,130-80,20-80,20l30,20s-30,10-40,20-40,0-40,0"
        transform="translate(4 4)"
        strokeMiterlimit="10"
        strokeWidth="5"
        stroke="url(#linear-gradient)"
      />
      <path
        id="path3763"
        d="M51,301s60-90,130-170S301,31,301,31"
        transform="translate(4 4)"
        fill="none"
        strokeMiterlimit="10"
        strokeWidth="6"
        stroke="url(#linear-gradient-2)"
      />
      <rect
        id="rect3765"
        x="5"
        y="5"
        width="330"
        height="330"
        rx="27.14"
        fill="none"
        stroke="#000"
        strokeWidth="10"
      />
      <g id="g3">
        <path
          id="path5"
          d="M257.47,311.35c0,1.74,19.18.92,21.15.54,3.27-.62-6.08-2.09-6.88-2.12-1.28-.06-14.28-.61-14.27,1.58"
          transform="translate(4 4)"
          fill="#73bf44"
        />
        <path
          id="path12"
          d="M282.06,307.88V283.54c0-1.58.9-1,2.4-1h20c2,0,4.29.27,6.08-.94,2.77-1.87,2.44-5,2.44-7.88,0-4.46,2-14.89-2.44-17.88-3.86-2.61-12.36-.94-16.67-.94-2,0-11.76,1.2-11.76-1V234.58c0-5.32,0-10.56-6.93-10.56h-9.52c-2.35,0-5.58-.51-7.82.44-5.17,2.19-3.38,11.6-3.38,16,0,1.15.18,14.48-.17,14.48H236.45c-4.7,0-12.91-1.3-12.91,5.77V277c0,7.12,9.15,5.59,13.76,5.59,1.38,0,17.11-.17,17.11.17v20.15c0,2.18-.44,5.11.43,7.18,1.53,3.62,5.15,3.38,8.39,3.38,4.92,0,18.82,2.49,18.82-5.54"
          transform="translate(4 4)"
          fill="#73bf44"
        />
        <path
          id="path14"
          d="M227.5,258.19c1.74,0,.93,19.18.55,21.16-.63,3.27-2.09-6.08-2.13-6.88-.06-1.27-.6-14.28,1.58-14.28"
          transform="translate(4 4)"
          fill="#73bf44"
        />
        <path
          id="path16"
          d="M310.61,258.19c1.74,0,.93,19.18.55,21.16-.63,3.27-2.09-6.08-2.13-6.88,0-1.27-.59-14.28,1.58-14.28"
          transform="translate(4 4)"
          fill="#73bf44"
        />
        <path
          id="path18"
          d="M257.8,279.67c1.78,0,.9,27.61.54,30.16-.24,1.69-.86,1.52-1.22,0a54.53,54.53,0,0,1-.93-11c0-1.47-.53-19.14,1.61-19.14"
          transform="translate(4 4)"
          fill="#73bf44"
        />
        <path
          id="path20"
          d="M283.36,258.37c0,1.78,24,.86,26.22.59,1-.12,2.38-.65.65-1.18-3-.92-6.43-.91-9.54-1-1.4,0-17.33-.57-17.33,1.6"
          transform="translate(4 4)"
          fill="#73bf44"
        />
        <path
          id="path22"
          d="M227.5,258.19c0-1.5,28.53-1.2,28.53,0s-28.53,3.74-28.53,0"
          transform="translate(4 4)"
          fill="#73bf44"
        />
        <path
          id="path24"
          d="M257.47,228.23c0,1.74,19.18.92,21.15.55,3.27-.63-6.08-2.09-6.88-2.13-1.28-.06-14.28-.6-14.27,1.58"
          transform="translate(4 4)"
          fill="#73bf44"
        />
        <path
          id="path26"
          d="M257.47,228.23c-1.51,0-1.21,28.31,0,28.31s3.72-28.31,0-28.31"
          transform="translate(4 4)"
          fill="#73bf44"
        />
        <path
          id="path28"
          d="M279.4,227.59c-1.5,0-.84,16.23-.83,17.56,0,2.48-.3,5.46.45,7.87.59,1.86,1.51-3,1.55-3.29.28-2.24,2.23-22.15-1.17-22.14"
          transform="translate(4 4)"
          fill="#73bf44"
        />
        <path
          id="path30"
          d="M279.4,280.55c-1.3,0-.84,15.46-.84,16.81a112.27,112.27,0,0,0,.22,11.6c.22,2.12,1,2.32,1.45.14s2.39-28.56-.83-28.55"
          transform="translate(4 4)"
          fill="#73bf44"
        />
        <path
          id="path32"
          d="M227.8,279.19c0-1.51,16.23-.85,17.56-.84,2.48,0,5.46-.29,7.88.46,1.86.58-3,1.51-3.3,1.54-2.23.29-22.15,2.23-22.14-1.16"
          transform="translate(4 4)"
          fill="#73bf44"
        />
        <path
          id="path34"
          d="M280.88,279.19c0-1.32,14.87-.84,16.15-.84a112.27,112.27,0,0,1,11.6.22c2.12.22,2.32,1,.14,1.45s-27.89,2.45-27.89-.83"
          transform="translate(4 4)"
          fill="#73bf44"
        />
        <path
          id="path36"
          d="M280.9,225.17c-3-3-9.71-1.81-13.55-1.81-4.66,0-12.19-1.28-13.47,4.94-.82,4-.13,8.65-.13,12.66v13.28c-5.91,0-11.82,0-17.73,0-5.33,0-13.14-1-13.14,6.71,0,5.27-.52,10.82,0,16.06,0,8,10.64,6.19,15.77,6.19,1.81,0,15.1-.74,15.1.66v19.45c0,6,.9,10.76,8.15,10.76h9.79c2.62,0,6,.5,8.27-1,4.46-3,2.75-12,2.75-16.56v-10.1c0-2.08-.71-3.17,1.48-3.17h20c2.25,0,4.66.27,6.64-1.06,3-2,2.73-5.29,2.73-8.42,0-4.8,2-15.24-2.73-18.43-2-1.33-4.39-1.06-6.64-1.06h-20c-2.19,0-1.48-1.09-1.48-3.17v-20c0-2.17-.15-4.22-1.81-5.88M224.2,277q0-8,0-16.06c0-6.93,8.37-5.4,13-5.4H254.9c.34,0,.17-13.23.17-14.36,0-4-1.82-13.78,2.73-16,1.95-1,4.89-.5,7-.5h10.36c7.13,0,6.27,6.15,6.27,11.35v18.89c0,2.25,25.42-1.2,29.05,1.7,3.81,3.07,1.82,13.58,1.82,17.8,0,2.69.14,5.56-2.73,7-1.8.89-4.44.5-6.37.5H283.24c-1.4,0-1.84-.44-1.84,1v8.88c0,5.24.66,10.94,0,16.15,0,7.15-13,4.87-17.42,4.87-2.92,0-6.53.56-8.27-2.44-1.06-1.84-.64-4.64-.64-6.67V282.85c0-4.66-30.88,4.85-30.88-5.84"
          transform="translate(4 4)"
          fill="#73bf44"
        />
      </g>
    </svg>
  );
};

export default AddPageBtn;
