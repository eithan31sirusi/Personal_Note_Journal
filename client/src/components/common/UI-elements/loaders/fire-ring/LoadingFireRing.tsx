import "./loadingFireRing.styles.css";

interface IProps {
  loaderTxt?: string;
}

const LoadingFireRing: React.FC<IProps> = ({ loaderTxt }) => {
  return (
    <div className="fire-circle-container">
      <p className="message-box">{loaderTxt ? loaderTxt : "בטעינה"}</p>
      <div className="circle"></div>
      <svg>
        <filter id="wavy">
          <feTurbulence
            x="0"
            y="0"
            baseFrequency="0.009"
            numOctaves="5"
            seed="2"
          >
            <animate
              attributeName="baseFrequency"
              dur="60s"
              values="0.02;0.005;0.02"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="30" />
        </filter>
      </svg>
    </div>
  );
};

export default LoadingFireRing;
