import React, { useContext } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { MainContainer } from "./components/layout/MainContainer";


import WorkShop from "./components/screens/work-shop/WorkShop";
import JurnalScreen from "./components/screens/jurnal-screen/JurnalScreen";
import {UserPageContext} from "./setup/context/userPageContext";



function App() {
  const { userWirtingData } = useContext(UserPageContext);



  return (
    <MainContainer appDirection={true}>
      <Router>
        {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/jurnal-screen">
            <JurnalScreen />
          </Route>
          <Route path="/workshop">
            <WorkShop />
          </Route>
        </Switch>
      </Router>
    </MainContainer>
  );
}

export default App;
