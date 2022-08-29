import React, { useContext } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { MainContainer } from "./components/layout/MainContainer";

import WorkShop from "./components/screens/work-shop/WorkShop";
import JurnalScreen from "./components/screens/jurnal-screen/JurnalScreen";
import { UserPageContext } from "./setup/context/userPageContext";
import Nav from "./components/static/header/Nav";
import Footer from "./components/static/footer/Footer";
import { PageContainer } from "./components/layout/PageContainer";
import HomeScreen from "./components/screens/home-screen/HomeScreen";

function App() {
  const { userWirtingData } = useContext(UserPageContext);

  return (
    <MainContainer appDirection={true}>
      <Router>
        <Nav />
        {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
        <PageContainer>
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route path="/jurnal-screen">
              <JurnalScreen />
            </Route>
            <Route path="/workshop">
              <WorkShop />
            </Route>
          </Switch>
        </PageContainer>
      </Router>
      <Footer />
    </MainContainer>
  );
}

export default App;
