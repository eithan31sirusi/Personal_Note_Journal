import React, { useContext, useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import JurnalSinglePage from "../../common/jurnal-single-page/JurnalSinglePage";

import UserPageContext from "../../../setup/context/userPageContext";
import FeatherQuil from "../../../assets/svg/buttons/FeatherQuil";

interface IProps {}

const JurnalScreen: React.FC<IProps> = ({}) => {
  const { userWirtingData } = useContext(UserPageContext);
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("userWirtingData") || "[]")
  );
  let history = useHistory();

  // useeffect to get all data from the userWirtingData
  useEffect(() => {
    console.log(userWirtingData, "jurnal");
    const items = JSON.parse(localStorage.getItem("userWirtingData") || "null");
    if (items) {
      setItems(items);
    }
    console.log(items, "items");
  }, [userWirtingData]);

  return (
    <>
      {items.length > 0 ? (
        items.map((item: any, index: any) => (
          <JurnalSinglePage
            key={index}
            pageNumber={item.pageNumber}
            title={item.title}
            paragraph={item.paragraph}
            symbole={item.symbole}
            date={item.date}
          />
        ))
      ) : (
        <>
          <h1>אין עמודים להצגה</h1>
        </>
      )}
    </>
  );
};

export default JurnalScreen;
