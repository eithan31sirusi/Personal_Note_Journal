import DragonA from "../assets/svg/page-decrations/text-decration/DragonA";
import DragonB from "../assets/svg/page-decrations/text-decration/DragonB";
import KngihtA from "../assets/svg/page-decrations/text-decration/KnightA";
import KngihtB from "../assets/svg/page-decrations/text-decration/KnightB";
import KngihtC from "..//assets/svg/page-decrations/text-decration/KnightC";
import KngihtD from "../assets/svg/page-decrations/text-decration/KnightD";

export const outPutSelectedSVG = (selectedSVG: any, setState:any|undefined) => {
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
        default:
            setState('DragonA');
          break;
      } 
    }