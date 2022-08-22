import DragonA from "../../assets/svg/page-decrations/text-decration/DragonA";
import DragonB from "../../assets/svg/page-decrations/text-decration/DragonB";
import KngihtA from "../../assets/svg/page-decrations/text-decration/KnightA";
import KngihtB from "../../assets/svg/page-decrations/text-decration/KnightB";
import KngihtC from "../../assets/svg/page-decrations/text-decration/KnightC";
import KngihtD from "../../assets/svg/page-decrations/text-decration/KnightD";

// arry of objects interface
interface PageDecoration {
  id: any;
  value: any;
  label: any;
  svg: React.FC<any>;
}

// array of objects to hold the svg and the text to be displayed on the page
const svgParagraphDecortion: PageDecoration[] = [
  {
    id: "dragonA",
    svg: DragonA,
    value: "DragonA",
    label: "DragonA",
  },
  {
    id: "dragonB",
    svg: DragonB,
    value: "DragonB",
    label: "DragonB",
  },
  {
    id: "knightA",
    svg: KngihtA,
    value: "KnightA",
    label: "KnightA",
  },
  {
    id: "knightB",
    svg: KngihtB,
    value: "KnightB",
    label: "KnightB",
  },
  {
    id: "knightC",
    svg: KngihtC,
    value: "KnightC",
    label: "KnightC",
  },
  {
    id: "knightD",
    svg: KngihtD,
    value: "KnightD",
    label: "KnightD",
  },
];

export default svgParagraphDecortion;
