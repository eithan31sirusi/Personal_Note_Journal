import React from "react";

interface IProps {
  children?: React.ReactNode;
  ClickHnadler?: () => void;
}

const DeleteBtn: React.FC<IProps> = ({ ClickHnadler }) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 341.62 341.62"
      onClick={ClickHnadler}
    >
      <title>Delete</title>
      <rect
        x="15.81"
        y="15.81"
        width="310"
        height="310"
        rx="26.55"
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
        stroke-miterlimit="10"
        stroke-width="10"
      />
      <g id="g3">
        <path
          id="path10"
          d="M260.43,317.24l11.77-11.72,5.87-5.84c1.14-1.13,1.37-.06,2.46,1q7.19,7.23,14.38,14.44c1.6,1.61,3.11,3.53,5.53,3.8,3.35.37,5.44-2.43,7.55-4.52,3.43-3.42,13.47-10.26,9.91-16-2.81-4.55-8.15-8.4-11.89-12.15L299.83,280c-1.27-1.28-.94-1.08.35-2.37l14.38-14.29c1.38-1.38,3.33-2.87,4-4.77,1.25-3.64-1.45-6-3.71-8.22-3.32-3.33-9.82-12.89-15.42-11-1.91.65-3.4,2.58-4.79,4l-7.86,7.82-6.51,6.48c-1.29,1.28-1.1,1.62-2.38.34l-14.16-14.22a25.13,25.13,0,0,0-4.12-3.93c-3.58-2.23-6.44.26-8.85,2.66-3.26,3.25-12.34,9.42-11.77,14.71.51,4.79,8.32,10.11,11.4,13.21q3.57,3.57,7.13,7.16c1.29,1.29,1.62,1.1.34,2.37l-14.71,14.64c-1.72,1.71-4,3.41-4.26,6-.37,3.35,2.43,5.44,4.53,7.54,3.52,3.53,11.34,14.79,17,9.11"
          fill="#ee2c24"
        />
        <path
          id="path12"
          d="M316.33,257.5c-1.27,1.25-14.51-13.23-15.65-14.93-1.91-2.82,5.89,2.9,6.49,3.45,1,.88,10.74,9.9,9.16,11.48"
          fill="#ee2c24"
        />
        <path
          id="path14"
          d="M275.81,261.49c-1.3,1.28-17.94-16.77-19.33-18.56-.66-.85-1.25-2.2.38-1.33,2.84,1.52,5.3,4,7.61,6.19,1,1,12.91,12.14,11.34,13.7"
          fill="#ee2c24"
        />
        <path
          id="path16"
          d="M275.73,297.64c-1.29-1.29-18,16.69-19.42,18.47-.66.85-1.25,2.2.39,1.33,2.83-1.5,5.31-4,7.63-6.15,1-1,13-12.08,11.4-13.65"
          fill="#ee2c24"
        />
        <path
          id="path18"
          d="M316.33,257.5c1.09,1.09-19.8,21.43-20.67,20.56s18-23.27,20.67-20.56"
          fill="#ee2c24"
        />
        <path
          id="path20"
          d="M316.23,300.8c-1.26-1.27-14.56,13.16-15.72,14.85-1.92,2.82,5.92-2.87,6.52-3.41,1-.89,10.78-9.87,9.2-11.44"
          fill="#ee2c24"
        />
        <path
          id="path22"
          d="M316.23,300.8c1.09-1.09-19.55-21.37-20.42-20.5s17.72,23.19,20.42,20.5"
          fill="#ee2c24"
        />
        <path
          id="path24"
          d="M300.8,317.08c1.1-1.09-11.09-12.36-12.05-13.32-1.8-1.79-3.73-4.17-6-5.37-1.76-.93,1.09,3.28,1.26,3.5,1.41,1.82,14.35,17.64,16.81,15.19"
          fill="#ee2c24"
        />
        <path
          id="path26"
          d="M262.61,278.73c.95-.94-10.55-11.81-11.52-12.78a116.24,116.24,0,0,0-8.52-8.24c-1.69-1.39-2.39-1-1.16.94s18.86,22.41,21.2,20.08"
          fill="#ee2c24"
        />
        <path
          id="path28"
          d="M301,242.51c1.09,1.09-11.15,12.31-12.12,13.27-1.81,1.78-3.74,4.15-6,5.34-1.77.92,1.1-3.27,1.27-3.49,1.41-1.82,14.44-17.59,16.88-15.12"
          fill="#ee2c24"
        />
        <path
          id="path30"
          d="M262.56,280.77c1,1-10.17,11.34-11.1,12.26a112.33,112.33,0,0,1-8.56,8.2c-1.7,1.37-2.38,1-1.15-1s18.45-21.87,20.81-19.5"
          fill="#ee2c24"
        />
        <path
          id="path32"
          d="M319.56,256.77c0-4.37-5.69-8.33-8.46-11.12-3.36-3.37-7.86-9.75-13.29-6.19-3.47,2.27-6.36,6.14-9.26,9L278.93,258l-15.51-15.57c-2.52-2.54-5.19-5.35-9.18-3.7-3.09,1.27-5.78,5.08-8.07,7.35s-5,4.34-6.8,6.94c-2.6,3.87,0,7.16,2.63,9.84l15.95,16q-7.8,7.74-15.58,15.5c-2.53,2.52-5.34,5.18-3.69,9.18,1.27,3.09,5.07,5.78,7.35,8.06s4.34,5.05,6.94,6.8c3.83,2.58,7.15.05,9.84-2.62l16-15.95,15.51,15.57c2.51,2.52,5.16,5.31,9.14,3.71,3.11-1.25,5.82-5.09,8.1-7.36s5.09-4.36,6.82-7c2.57-3.87,0-7.14-2.64-9.81l-16-16,10.94-10.89c2.88-2.76,8.88-6.86,8.88-11.3m-78.45-3.69c4-4,13.41-17.61,19.51-11.49L278.92,260l11.64-11.65c3.08-3.07,9.34-11.95,14.23-7l11.77,11.76c4.92,4.94-3.15,10.52-6.34,13.69L297.92,279c-.06.06,10.21,10.32,11,11.08,3.05,3.07,12.7,9.88,7.73,14.82-3.25,4.22-7.85,7.82-11.63,11.58-5.16,5.13-10.51-2.73-13.9-6.14Q285,304.2,278.84,298c-6.14,6.1-12,13.46-18.84,18.74-4.9,4.88-11.25-4.24-14.3-7.3-3.27-3.29-9-7.47-4.23-12.22l11.87-11.82c1.28-1.27,7.34-5.63,5.8-7.18L247,266c-2.94-2.95-10.48-8.32-5.84-12.92"
          fill="#ee2c24"
        />
      </g>
      <path
        d="M164.1,58.41l-5.57,1.23-2.22-3-37,6.65-.74,8.88L100.84,73S68.59,89.22,69.56,101.05,75,126.21,75,126.21l17.56,52.51.94,12.57,4.28,4.35,19.09,68.71-2.66,8.3s51.85,35.4,122.78-5.9c-.74-12.58,1.48-65.12,9.61-78.42a129,129,0,0,1,8.14-13.3l-1.6-3.3,13.43-56.61s8.55-9.23,6.49-17.19-7.59-16.09-25.5-28.29c-11.14-1.92-35,1.09-35,1.09l-3-14L173.32,56S169,59.38,164.1,58.41Z"
        fill="#762415"
        fill-rule="evenodd"
      />
      <g id="baskets_Image" data-name="baskets Image">
        <path
          d="M131.92,77.86c3.32,1,.23,7.33-1.48,8.14C130.13,82.48,131.51,80.66,131.92,77.86Z"
          fill-rule="evenodd"
        />
        <path
          d="M125.26,82.3c1.13,0,1.62,5.48-.74,4.44C124.42,84.91,124.41,83.17,125.26,82.3Z"
          fill-rule="evenodd"
        />
        <path
          d="M181.48,87.48c2.4,1.39-.09,3.37,1.48,5.91-2.31-.16-1.26-3.68-1.48-5.91Z"
          fill-rule="evenodd"
        />
        <path
          d="M131.18,91.17c2.32.51,1,2,.74,3.7C130,94.8,130.17,92.12,131.18,91.17Z"
          fill-rule="evenodd"
        />
        <path
          d="M195.53,101.53c1.8,1.9-.28,7.67,2.22,8.87-2,1.54-4.06-6.45-2.22-8.87Z"
          fill-rule="evenodd"
        />
        <path
          d="M189.61,196.2c.29,2.76-.59,4.34-3,4.44-.33-.65-.65-1.32-1.48-1.48.1-2.37,1.68-3.25,4.44-3Z"
          fill-rule="evenodd"
        />
        <path
          d="M155.58,199.9c.65,2.38-1.91,1.54-2.21,3-1.09-.65-2.35-1.11-2.22-3A3.62,3.62,0,0,1,155.58,199.9Z"
          fill-rule="evenodd"
        />
        <path
          d="M236.21,214c3.24.08-1.17,3.22,0,5.92-2.19-1.3.43-3.94,0-5.92Z"
          fill-rule="evenodd"
        />
        <path
          d="M237.69,225.79c-2.46.51-1.19-1.52-.74-2.22-.18-6.46,1.3-1.51.74,2.22Z"
          fill-rule="evenodd"
        />
        <path
          d="M236.21,226.53c.86.12.62,1.35.74,2.22-.8,2.05-2.19,12.5-2.22,4.44.33-2.39,1.41-4,1.48-6.66Z"
          fill-rule="evenodd"
        />
        <path
          d="M186.65,227.27a4.86,4.86,0,0,1,3.7.74c-.53,3.84-.38,4.39-.74,8.88.36-1.46-4.21-6.9-3-9.62Z"
          fill-rule="evenodd"
        />
        <path
          d="M130.44,229.49c1.67,2.52,3.47,4.91,2.95,9.62-2.17-2-2.3-6.1-2.95-9.62Z"
          fill-rule="evenodd"
        />
        <path
          d="M128.22,239.1c1.48,1,1.65,3.29,2.22,5.18-3,.48-2.12-2.81-2.22-5.18Z"
          fill-rule="evenodd"
        />
        <path
          d="M233.25,242.06c1.62,3.13-.22,9.14-.74,12.58-.57-2.07.08-9.27.74-12.57Z"
          fill-rule="evenodd"
        />
        <path
          d="M162.24,279.78c.64,2.8-3.31,2.62-4.43,1.48C158.21,279.51,160.66,278.19,162.24,279.78Z"
          fill-rule="evenodd"
        />
        <path
          d="M212.54,277.56c-.31-1.66-3.93,0-4.44-1.47.63-1.11,2.38-1.08,3.7-1.48-.18-1.3-1.27-1.69-3-1.48,2.49-1.21,5.47-1.93,8.13-3-2,1.09.6,3.71,1.49,1.48,1.62,1.91-4.81,2.07-5.18,4.44,3.74-.21,4.93-3,8.13-3.7-1.49,1.71.3,1.7,1.48.74,1.45-1.26-3.22-1.73,0-3.7,2.34,2.11,7.93.45,10.36-3.7-.88-1.3-3.64,1.73-5.18,2.22-.75-1.37,4.14-2.71,3-5.18,1.94-1.92.58,1.2,3,.74,1.84-2.4-2.08-2.35.74-4.44-10.35,7.41-27.19,14.73-45.12,17-1.19,1.73,2.17,1.21,2.22,1.48s-4.08,2.89-4.44,4.43a2.92,2.92,0,0,1-.74-5.17c-16.24.45-35.23,1.09-51.78-3-2.44,1.11,1.54,1.81.74,3.7-1.48-.25-2.31.15-2.22,1.47,1.5,1,7,.87,10.36,0-2.63,4.58-6.46,2.32-11.83,1.48-5.7-.88-12-2.27-17-5.17-1.25-3.65-2.77-10.77,0-14.06-5.29-18.86-7.48-40.84-14.79-57.69.13-6.79-2.88-10.43-6.66-13.31-1.41-8.59,0-15.47-3-22.19,5.55,3.82,2.87,15.87,11.1,17,1.65-5.11-4.46-8.85-3.7-15.53,2.87,2.06,2.71,7.15,4.44,10.35.62-6.45-2.41-12.86-4.44-19.23-3.22-10-6.36-20.33-10.36-29.57-3.31,3.27,2.45,9,3,13.31-3.83-2.09-3.57-14.67-10.35-16.27-2,5,2,10.71,5.18,14.8,0,1.89-.55.9-1.48.73-.35,1.58,1.06,1.41,2.22,1.48,1.07,8.22,4.55,14.76,7.39,22.93-1.52,0-2.89-6.19-3.69-2.22-4.67-10-9.22-29-14.8-40.68-2.61-5.47-6.52-10.58-6.65-16.27-.48-19.41,18.22-28.31,32.54-37,5.85-.32,13.07.74,17.75-.74a31.08,31.08,0,0,1,.74-8.88c11.2-3.34,24.33-4.75,37-6.65.74,1,2,1.45,2.22,3,4.24-1.92,13.57,1.25,14.79-3.69,14.38-.45,22.46.81,36.25.74,2,3.14,1.22,9.12,3,12.57,11.11-.23,20.56-2.11,32.54-1.48,2.06.91,3.34,3.22,5.92,5.18,5.6,4.24,15.64,10.54,20,17,3.46,5.18,3.11,21.92-4.44,25.15-2.94,18-10.61,31.3-12.57,50.3-1.07.9-1.12,2.82-2.22,3.69.15,2.81,3.11,2.81,3,5.92-.44,5.73-3.92,8.41-6.66,11.84-2.18,12-4.23,24-6.66,35.5-2.2,10.47-6.2,21.46-5.17,31.8.44,4.42,3.88,7.93.74,12.58-5.06,7.47-23.91,14.6-34.77,17-15.39,3.41-38.14,3.62-55.47,1.48-.33-.66-.65-1.32-1.48-1.48,23.5,1.42,47.18,1.42,67.31-5.16Zm-131.66-159c-3.59-2.39-6.21-6.22-10.35-6.65,2.24,7,5.86,12.9,11.09,16.27,1.65,1.06,5.46,2.49,8.14,3.7,7.31,3.31,14.44,4.27,23.66,5.91,16.32,2.92,34.21,4,49.56,4.44,1.36-1.73-.77-4.7,0-8.13C133.21,135.75,99.33,130.81,80.88,118.54ZM106,128.16c.67-2-3.55-2.83-5.92-3.7a35.26,35.26,0,0,0-8.87-2.22c-1.57-1.89-4.18-2.73-6.66-3.7C89.22,124.25,98.14,125.69,106,128.16Zm68.05-70.27c-2.1,6.61.69,16.43.74,22.19.05,5.21-1.12,9.34-.74,11.84.59,3.91,2.23,2.67,2.22,3-2.67,4.93-1.63,16.84-.74,22.93,13.26-1.15,30-2.93,41.42-8.13-3-17-6.45-33.5-8.88-51-10.89.32-24.2-2.25-34-.74ZM115.64,92.66c.14-1.62-.6-2.36-2.21-2.22-12.29.86-22,.49-35.51.74,2.27,5.28,3.28,10.54,5.92,13.31,5.71,6,15,.85,28.1,2.22,2-3.48,1.65-9.21,3.7-12.58,2.77,1.51,1.44,8.48,0,10.36-.12-1.11.27-2.73-.74-3-.36,4.82-2.09,8.26-2.22,13.32,5.08,1.08,9.47,2.86,15.54,3,.4-1.07-.87-3.82.74-3.7-.1,1.83-.11,3.57.74,4.44,6.34-.52,15.64,1.72,23.67,0,.46-19,1.6-41.71,1.47-59.91-12.34.48-22.27,3.36-33.28,5.18-.78,7.11-3.75,16-3,22.19,0-.79.35-1.88.74-.74C118.29,87.91,116.51,89.82,115.64,92.66Zm42.17-27.37h14.05V60.85c-4.27-.9-15.67-3-14.06,4.44Zm85.8,4.44c-6.27-3.48-22,2.77-31.07,0-.65,2.37,2.44,1,2.22,3a2,2,0,0,0-2.22,1.48c4,.9-1,3,3,4.44-.57.17-1.46,0-1.48.74a2,2,0,0,1,1.48,2.22c14.83-1,27-1.08,41.42-1.48-2.64-4.14-8.63-7.75-13.31-10.35ZM157.81,72c-1.81,3.49,1.93,5.28,2.21,8.87.22,2-2.87.58-2.21,3,4.6-.08,8.14-1.23,13.31-.74,1.54-2.66.38-8,.74-11.83-6,.42-9.78-.24-14.06.74Zm-74,13.31c11.62.53,21.4-.79,32.54-.74.63-3.57,1-7.37,1.48-11.09C101.4,72.25,92.06,78.2,83.84,85.26Zm88-.74c-4,.48-9.85-1-12.58.74C161.69,85.26,169.06,87.56,171.86,84.52ZM248,102.27c5.27-4.63,13.79-9.81,14.79-16.27-14.08.71-20.8.87-32.54,1.48-.12.87.12,2.1-.74,2.22-.29-1.06-.89-1.25,0-2.22-5.25.51-11.56-2.8-14.06,2.22.88,1.09,2.8,1.15,3.7,2.22-1.31.16-3.7-.75-3,1.48,1.76-.62,3.41,1,.74.73-.55,2.53,2.73,1.22,3,3-1.93-.21-3.18.27-3,2.22,2.13-.15,3.76.19,4.44,1.48-.7,1.85-3.81-2-3.7,1.48,7.93.78,20.18-.52,30.32,0Zm-166.42-14c2-.46,5.87.94,6.66-.74C87.08,86.5,81.76,85.88,81.62,88.22Zm17,0c1-.84,10.1-.82,4.44-1.48C95.38,86.74,90.15,86.62,98.63,88.22Zm58.43.74c0,4.31,1.78,5.28,0,8.87.87.12,2.1-.12,2.22.74-3.33-.51-2,1.52-.74,2.22-3.75,1.21.32,2-2.22,4.44,4.68-1.48,12.52.19,17-1.48-.25-4.92-1.14-9.2-.73-14.79-5.42-1.13-8.69,1.1-15.54,0ZM89,89c-2.5.47-6.87-1-8.14.74C83,90.52,87.93,91.24,89,89ZM254,102.27c-.78,2.79,3.2,3.37,0,4.44-.74-1-.7-2.75-2.22-3-.22,1.51-1.48,2-2.22,3,4.33-1.13-.59,3.38,3,3.7,6.5-5.42,19.3-8.19,16.27-20.71-4.73,0-2.93,5.35-3,6.66-1.42-.31-.58-2.87-3-2.22-.79,2.76,1.84,2.1,1.48,4.43-4.15-2,1.11,3.52-3,3.7-.6,0-.67-3.43-3.7-2.22,1.09.65,2.35,1.11,2.22,3-2-2-.69,1.08-2.22,1.48-.31-1.41-.26-3.18-2.21-3-.58,1.89,2.89,3.4.74,4.44-.24-1.73-.75-3.19-2.21-3.7ZM80.88,115.58c.63-2.32,2.8-3.12,3-5.91-4.25-3.4-6.17-9.12-10.36-12.58C69.6,105.27,74.13,113.58,80.88,115.58Zm3.7-7.39c-1-4.66-4.84-6.5-6.66-10.36C78.94,102.49,82.11,105,84.58,108.19ZM250.26,123a40.5,40.5,0,0,1,9.61-5.18c.29-1.27-1.1-1.89,0-2.21,3.43-.77,3.88-4.51,7.4-5.18-2.74-3.33,3.77-4.83,1.48-7.4-1.1,2.91-1.16.14-2.23-.74.2,2.42-2.3,2.14-2.95,3.7-8.4,4.18-16.56,12.53-26.63,12.58,1.55-1.66,5.43-1,6.66-3A52.88,52.88,0,0,0,222.15,123c3.35.85,5.77-3,8.13-.74-19.54,5.85-39.42,11.37-64.35,11.84a17.3,17.3,0,0,0,1.48,8.13c23.72-2.72,45.23-4,62.87-11.83-1.3-.43-4.34.89-4.44-.74,4.07-.62,8.92-.46,11.1-3,.11.87-.13,2.1.74,2.22,1.51-1.24,5.45-3.88,7.4-2.22-1.6,2.1-1.85,5.55-3.7,7.4.16-1.39,1.9-4.9,0-5.92-1.61,2.27-1.18,3.23-3.7,1.48-1.52.2-.18,3.27-2.22,3-1.62-2.75-5.56,0-6.66,3-.07-1.17.1-2.57-1.48-2.22-1.52.2-.69,2.75-2.21,3-.9-4.35-5.13.45-8.88.74-.87,7.47-.67,11.56-3,17.75.16-6.5,2-11.3,2.22-17.75-3.67,2.72-3.81,9.87-4.44,15.53-1,8.68-1.55,17-2.22,25.89-.27,3.63-2.83,8.52,0,11.09,1.6-.63-.27-4.72,1.48-5.18-.23,2.46-.11,4.55,1.48,5.18-31.37,9.17-73.9,8.39-104.29,1.48,1.11-.12,2.73.26,3-.74-5.84-1.56-10.46-4.34-15.53-6.66-.49,3.45,1.16,4.75,1.48,7.4,5.49,3.5,11.82,7.54,19.23,8.88,1.34.24,1.67-.76,3-.74,3.3,0,6.19,2.29,9.61,3,9.36,1.81,20.19,1,30.33.74,15.22-.4,29.55-.59,42.16-3,1.94-.37,3.91-1.88,5.92-2.22.83-.14,1.5.82,2.95.74,6.58-.38,13.07-4.15,18.49-5.92,1.51-.49,3-.18,4.44-.74,4.75-1.88,9-5.36,13.32-6.66,1-1.42.4-4.52,3.69-3.7-1.57-4.31,4.28-5,1.48-8.13a32.2,32.2,0,0,1-3,3.7c-10.71,5.31-21.64,10.4-35.5,12.57,2.51-3.51,4.84-3.37,9.62-3.7.12-1.1-.27-2.73.73-3,.08,1.17-.09,2.57,1.49,2.22,1.79-2.57,4-.78,5.17-4.44v2.23c6.64.07,8.59-3.5,9.62-9.62,1.11-6.57,4.88-15.12,6.65-23.67,2.05-9.84,4.27-18.2,4.44-25.15-2.09.23-2.88,3.69-4.44,2.22-.51-3,3.12-1.81,3-4.44-1.84-.52-3,3.26-4.44.74,3.17,1.14,3.78-4,5.18-2.22,1.64,1.09-.93,1.83.74,2.25Zm-145,74c-2.17.19-2.28-1.68-4.44-1.48V197c4.08,10.8,6.89,23.19,9.61,35.5,1.34,6.08,3.2,12.4,4.44,18.49,1.1,5.45-.37,13.94,5.92,16.27-2.59-26-8.55-48.65-15.53-70.26Zm7.39,3c-.57.16-.86.62-.74,1.48a596.11,596.11,0,0,1,12.57,67.31c6.63,1.57,13.89,6.24,21.45,4.43-2.2-11.89-3.06-26.15-5.17-38.46-1.31-7.57-2.46-19-4.44-20.71.36.32-.24,2.53-.74,2.22.49-2,.31-4.62,1.48-5.92,1.28.45-.06,3.51,1.48,3.7-.14-3.81-.26-7.62-2.22-9.61-.4,1.07.87,3.82-.74,3.7,0-4.91-5.23-4.64-9.61-5.18-.13,1.1.26,2.73-.74,2.95-.51-5.67-8.93-3.42-12.58-5.93Zm122-94.68c2.51-.13,12.92-.72,8.88-1.48-6.72-1.25-21.41,1.69-24.41,1.48,6.62-.21,10.13.28,15.53,0Zm-78.4,2.22c5.25.87,13.25,1.25,17-1.48-5.36.81-14.06-1.72-17,1.48Zm87.28,5.18c1.74-.24,2.77-1.17,5.18-.74.25-6.42-4.48-5.59-8.88-5.92.68,2.77,3.4,3.5,3.7,6.66Zm-156.07-3c5.59-.32,18.75,1.16,24.41-1.48C103.25,108.13,94.58,108.08,87.53,109.67Zm-2.22,6.65c.46-.41,3.55,2.83,6.66,2.22-.4-4.09,2.56-4.83,3.7-7.39C90.43,112.14,85.21,110.84,85.31,116.32Zm117.6.74c4.52-.16,6.68-2.69,11.84-2.21.3-1.43,3.38-.07,2.22-3-2.23,1.22-10.13,3.16-14.05,5.17Zm-46.59-1.48c1.87-.69,4.19-.53,5.18,1.48h-4.44c.36,2.34-1.33,2.62-.74,5.18,3.91.33,2.31-2,5.92-.74,1.06-3.71.52-3.68.74-7.4C160.58,114.42,156.58,113.13,156.32,115.58Zm9.62,8.14c-1,2.06-1.18,7.71-.74,8.88,10.69-2,22.4-.16,29.58-4.44,8.32,1.83,15.93-3.25,24.41-3.7.44-1.16.26-6.82-.74-8.88-16.3,3.93-32.75,7.69-52.52,8.14Zm-42.16-4.44c-3.83-.85-6.8-2.57-11.1-3C114.58,118.64,120.82,120.49,123.78,119.28Zm41.41,2.22c2.08,1.71,5.71.23,8.14,0v-3.7a16.77,16.77,0,0,0-6.65-1.47c-.83,1.39-1,3.49-1.49,5.17Zm91-.74c-6,19.11-9,38.06-14.05,57,3.1-.85,4.79-3.1,7.4-4.44.79-4.9.13-7.6,0-10.36,1,0,.67,1.3,1.47,1.48,1.79-4.18.32-7.42,3-11.09-.9-.09-1.75-.22-1.48-1.48,4.7-9.86,4-25.11,11.1-32.55a2,2,0,0,0-1.48-2.22c-1.89,1.32-2.34,4.07-5.91,3.71Zm-76.19,0c5.71-.7,11.92-.91,16.28-3-5.58.84-13.93-.09-16.27,3Zm-62.86,8.88c4.22.36,10.09,2.58,14,1.48,1.84-.52-.46-1.44,1.48-1.48,4.07-.1,8.68,2,10.35,2.22,5.75.73,11.94.11,19.24.74.88-2.39-1.32-4.4,0-8.14-19.39-.89-35.92-1-51-5.18-.23,3.73-2.38,5.52-3,8.88C110.24,130.73,121.45,126.62,117.12,129.64ZM129,120.76c-1.32-.29,4.39,1.57,5.92,0C133.08,119.87,125,119.9,129,120.76Zm17.75.74c-7.08.92,11.88,1.72,5.18-1.48C151,121.37,148,120.6,146.7,121.5Zm112.43,11.84c.44-1.87,3.29-8.09,1.48-7.4-.82,1.55-3.26,10.3-1.48,7.4Zm-125,59.91c-.56-7.38-3.66-14.45-5.17-21.45-.82-3.75-.19-8.15-3-11.1-.85,3.35,3.05,5.78.74,8.14-1.31-4.86-4.59-11.67-3-17-.35,2.82.31,4.62,2.22,5.18a65.54,65.54,0,0,0-3.7-15.54c-2.33,1-4.44-1.07-7.4-1.47-1,.45-.11,2.84-1.48,2.95.64-2.36-1.16-2.28-1.48-3.7-8.13-.82-11.21-2.13-17.75-4.43,5.47,17.7,10.42,35.93,15.53,54,7,1.61,13.76,3.5,21.45,4.44.07-5.81-5.35-16.28-3.69-23.67,3.16,7.46,1.37,17.31,6.65,23.66ZM194.79,143c.09-1.33-.74-1.73-2.22-1.48-3.35,2.1-9.2-.34-12.58,3-1.16-2.63-3.14-.15-5.92-1.48v11.84c4.78-.59,8.42,4.54,9.62-.74-.18,3,.72,7.13-1.48,8.13-.67-3.76-3.84-5-8.14-5.17.22,12.38-.09,23.31,0,37a221.16,221.16,0,0,0,27.37-3.7c1.26-17,2.35-34.14,3.7-51-3.62,1.09-9.25.14-10.36,3.72ZM129,142.21c2.57,17.89,7.67,33.25,9.61,51.78,9.11.26,19.4-.66,27.37.74,1-10.92-2.87-23.24-3.7-34.77-3.86-.4-1.88,5-5.92,4.44-.51-5,4.35-4.53,5.18-8.13-.65-4.28-1.5-8.36-2.22-12.58-11.86.13-21.63-1.05-30.32-1.48Zm34.76,9.62c1.17-2.29-.6-7-2.22-8.88C160.71,144.87,161.89,150.18,163.72,151.83Zm7.4-1.48c-.82-2.32-.35-2,.74-3.7-3.85,2.61-1.39-3.52-4.44-3.7C167.34,146.73,166.8,151,171.12,150.35Zm75.44,37c-2.88-2.21-3.41,4.6-6.66,2.22-4.52,22.6-12.4,45.78-11.83,71,.32-1.87,3.38-1,5.17-2.95,1.17-4.51.89-10.46,2.22-14.8-1.45-1.42-3.41-4.19,0-5.18-.21.46-1.84,2.85,0,3,3.16-18.28,6.39-36.5,11.09-53.25Zm-42.9,84.32c2.71-1.73,7.85-1,8.87-4.44,1.89,2.89,7.58-2.61,11.1-3,1.9-25.54,7.64-46.87,11.83-71.74-3.78.9-7.64,1.72-8.87,5.17.2-1.68-.18-2.78-1.48-3-1.22,1.25-1.61,3.33-3,4.44.53-4.28-3.34-1.31-3.7,0-2.25-3-5.77.31-7.4,3,.24-1,1.06-1.41.74-3-3.07,2.39-2.71.75-5.91,1.48,1.35,8.34-2.72,17.18,0,22.19,1.35-1.6-.14-6.06,1.47-7.39-1.47,19.88-3.17,38-3.68,56.21Zm.74-48.07c1.25,2.54-1.16,4.46.74,6.65-.11-.78,2.46-5.88-.74-6.66Zm-29.58-19.23c1.57,24.3.64,46.63,2.22,71,3.05-1.13,8.67.3,9.61-3,.18,3.6,2.06,1.36,3,0,1.16.31.63,2.32,3,1.47,1.7-1.84,3.39.27,7.4-1.47-.81-22.35,0-47.23,1.47-71-9.38.49-16.68,3.05-26.64,3Zm-25.15,70.26c9,.78,14.73.52,23.66.74-1.05-19.47-2.2-48.84-5.91-70.27-7.31,0-18.52.59-26.63-.74,4,24,6.79,44.58,8.87,70.27Zm-9.62-51.77c.1-3.06-.2-5.72-1.48-7.4.05,2.91.36,5.56,1.48,7.4Zm-23.67,4.44c-.79-1.92-.47-5-2.22-5.92-.2,2.91.29,5.14,2.22,5.92Zm15.54,49.55c-2.65-1.7-.19-2.06.74-3.7-2.17,0-5.44,1-7.4,0,.45-1,2.85-.11,3-1.48-4.68-1.24-8-3.8-12.58-5.18-1.39,11,9.24,10,15.54,13.31.65-2.37-1.92-1.53-2.22-2.95,1.38-.7,2.47,2.23,3,0Z"
          fill-rule="evenodd"
        />
        <path
          d="M234,124.46c-1.84,1.12-3,2.9-5.92,3,1-1.94,3.82-2.1,5.92-3Z"
          fill-rule="evenodd"
        />
        <path
          d="M199.23,131.85c-.19.81-1.47.51-1.48,1.48-3-.69-7.72,2-4.44-.74a13.71,13.71,0,0,0,5.92-.74Z"
          fill-rule="evenodd"
        />
        <path
          d="M90.49,147.39c1-3.29,1.61,5.49,3.7,5.91-.41,6.58,3.55,8.79,3.7,14.8-3.73-5.64-4.72-14-7.4-20.71Z"
          fill-rule="evenodd"
        />
        <path
          d="M185.91,163.65c2.05-.25-.87,6.23,0,9.62-.35,4.06-1.13-6.69,0-9.62Z"
          fill-rule="evenodd"
        />
        <path
          d="M221.42,188.8h4.44c.53,2.27-1.28,2.18-.74,4.44-2.09-.61-1.92,1-3.7.74.47-3.83-1.53-1.1-3.7-1.48-1.86-1.43,5.44.07,3.7-3.7Z"
          fill-rule="evenodd"
        />
        <path
          d="M120.82,197.68c2.69.72.34-3.6,3.7-2.21-1.86,1.3-.52,1.22-1.48,2.95-2.33.36-2.89-1-4.44-1.47,1.27-.71,1.21-2.74,3.7-2.23,0,1.47-2,.94-1.48,3Z"
          fill-rule="evenodd"
        />
      </g>
    </svg>
  );
};

export default DeleteBtn;