import React, { useContext } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { MainContainer } from "./components/layout/MainContainer";

import WorkShop from "./components/screens/work-shop-screen/WorkShopScreen";
import JurnalScreen from "./components/screens/jurnal-screen/JurnalScreen";
import { UserPageContext } from "./setup/context/userPageContext";
import { AuthContext } from "./setup/context/authContext";

import Nav from "./components/static/header/Nav";
import Footer from "./components/static/footer/Footer";
import { PageContainer } from "./components/layout/PageContainer";
import HomeScreen from "./components/screens/home-screen/HomeScreen";
import UsersScreen from "./components/screens/users-screen/UsersScreen";
import Auth from "./components/screens/auth-screen/Auth";
import EditPageForm from "./components/common/edit-page-form/EditPageForm";
import UpdatePageScreen from "./components/screens/update-page-screen/UpdatePageScreen";

import { EditFormPortal } from "./components/static/portals/EditFormPortal";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  // get the userid from the login context

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route path="/workshop">
          <WorkShop />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/:userId/pages">
          <JurnalScreen />
        </Route>
        <Route path="/users">
          <UsersScreen />
        </Route>
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route path="/users">
          <UsersScreen />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/workshop">
          <WorkShop />
        </Route>
      </Switch>
    );
  }

  return (
    <MainContainer appDirection={true}>
      <Router>
        <Nav />
        <PageContainer>{routes}</PageContainer>
      </Router>
      <Footer />
    </MainContainer>
  );
}

export default App;
