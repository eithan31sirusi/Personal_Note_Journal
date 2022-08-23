import DragonA from "../../assets/svg/page-decrations/text-decration/DragonA";
import DragonB from "../../assets/svg/page-decrations/text-decration/DragonB";
import KngihtA from "../../assets/svg/page-decrations/text-decration/KnightA";
import KngihtB from "../../assets/svg/page-decrations/text-decration/KnightB";
import KngihtC from "../../assets/svg/page-decrations/text-decration/KnightC";
import KngihtD from "../../assets/svg/page-decrations/text-decration/KnightD";
import KngihtE from "../../assets/svg/page-decrations/text-decration/KnightD";
import SwordsWoman from "../../assets/svg/page-decrations/text-decration/SwordsWoman";
import Skull from "../../assets/svg/page-decrations/text-decration/Skull";
import FemaleWorker from "../../assets/svg/page-decrations/text-decration/FemaleWorker";
import HandsTree from "../../assets/svg/page-decrations/text-decration/HandsTree";
import OldFatherTime from "../../assets/svg/page-decrations/text-decration/OldFatherTime";
import Pegasus from "../../assets/svg/page-decrations/text-decration/Pegasus";
import Senmurv from "../../assets/svg/page-decrations/text-decration/Senmurv";
import Prince from "../../assets/svg/page-decrations/text-decration/Prince";
import DefaultSVG from "../../assets/svg/page-decrations/text-decration/DefaultSVG";  

// arry of objects interface
interface PageDecoration {
  id: any;
  value: any;
  label: any;
}

// array of objects to hold the svg and the text to be displayed on the page
export const svgParagraphDecortion: PageDecoration[] = [
  // default value
  { id: "DefaultSVG", value: "none", label: "בחר סמל" },
  {
    id: "dragonA",
    value: "DragonA",
    label: "DragonA",
  },
  {
    id: "dragonB",
    value: "DragonB",
    label: "DragonB",
  },
  {
    id: "knightA",
    value: "KnightA",
    label: "KnightA",
  },
  {
    id: "knightB",
    value: "KnightB",
    label: "KnightB",
  },
  {
    id: "knightC",
    value: "KnightC",
    label: "KnightC",
  },
  {
    id: "knightD",
    value: "KnightD",
    label: "KnightD",
  },
  {
    id: "knightE",
    value: "KnightE",
    label: "KnightE",
  },
  {
    id: "swordsWoman",
    value: "SwordsWoman",
    label: "SwordsWoman",
  },
  {
    id: "skull",
    value: "Skull",
    label: "Skull",
  },
  {
    id: "femaleWorker",
    value: "FemaleWorker",
    label: "FemaleWorker",
  },
  {
    id: "handsTree",
    value: "HandsTree",
    label: "HandsTree",
  },
  {
    id: "oldFatherTime",
    value: "OldFatherTime",
    label: "OldFatherTime",
  },
  {
    id: "pegasus",
    value: "Pegasus",
    label: "Pegasus",
  },
  {
    id: "senmurv",
    value: "Senmurv",
    label: "Senmurv",
  },
  {
    id: "prince",
    value: "Prince",
    label: "Prince",
  },
];

export const outPutSelectedSVG = (
  selectedSVG: any,
  setState: any | undefined
) => {
  switch (selectedSVG) {
    case "DragonA":
      setState(DragonA);
      break;
    case "DragonB":
      setState(DragonB);
      break;
    case "KnightA":
      setState(KngihtA);
      break;
    case "KnightB":
      setState(KngihtB);
      break;
    case "KnightC":
      setState(KngihtC);
      break;
    case "KnightD":
      setState(KngihtD);
      break;
    case "KnightE":
      setState(KngihtE);
      break;
    case "SwordsWoman":
      setState(SwordsWoman);
      break;
    case "Skull":
      setState(Skull);
      break;
    case "FemaleWorker":
      setState(FemaleWorker);
      break;
    case "HandsTree":
      setState(HandsTree);
      break;
    case "OldFatherTime":
      setState(OldFatherTime);
      break;
    case "Pegasus":
      setState(Pegasus);
      break;
    case "Senmurv":
      setState(Senmurv);
      break;
    case "Prince":
      setState(Prince);
      break;
      

    default:
      setState(DefaultSVG);
      break;
  }
};
