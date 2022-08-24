import React, { useContext } from "react";

import { MainContainer } from "./components/layout/MainContainer";

import WorkShop from "./components/screens/work-shop/WorkShop";
import JurnalScreen from "./components/screens/jurnal-screen/JurnalScreen";
import UserPageContext from "./setup/context/userPageContext";

function App() {
  const { userWirtingData } = useContext(UserPageContext);
  return (
    <MainContainer appDirection={true}>
      {userWirtingData.map((item: any, index: number) => {
        return (
          <JurnalScreen
            key={index}
            paragraph={item.paragraph}
            date={item.date}
            title={item.title}
            pageNumber={item.pageNumber}
            symbole={item.symbole}
          />
        );
      })}
      <WorkShop />
    </MainContainer>
  );
}

export default App;
