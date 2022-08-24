import React, { useContext, useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import JurnalSinglePage from "../../common/jurnal-single-page/JurnalSinglePage";

import UserPageContext from "../../../setup/context/userPageContext";

interface IProps {}

const JurnalScreen: React.FC<IProps> = ({}) => {
  const { userWirtingData } = useContext(UserPageContext);
  const [items, setItems] = useState([]);
  let history = useHistory();

  // useeffect to get all data from the userWirtingData
  useEffect(() => {
    console.log(userWirtingData, "jurnal");
    const items = JSON.parse(localStorage.getItem("userWirtingData") || "[]");
    if (items !== null) {
      setItems(items);
    }

    console.log(items, "items");
  }, [userWirtingData]);

  return (
    <>
      {
        // if the userWirtingData is empty render the message else render the data
        items.length === 0 ? (
          <>
            <h1 style={{ fontSize: "5rem", color: "red" }}>התחל לכתוב</h1>
            <button
              style={{
                backgroundColor: "green",
                color: "white",
                fontSize: "2rem",
                padding: "1rem",
                borderRadius: "5px",
                margin: "1rem",
                cursor: "pointer",
              }}
              onClick={() => {
                // use react router dom to navigate to the workshop screen
                history.push("/workshop");
              }}
            >
              התחל לכתוב
            </button>
          </>
        ) : (
          items.map((item: any, index: number) => {
            return (
              <JurnalSinglePage
                key={index}
                paragraph={item.paragraph}
                date={item.date}
                title={item.title}
                pageNumber={item.pageNumber}
                symbole={item.symbole}
              />
            );
          })
        )
      }
    </>
  );
};

export default JurnalScreen;
