import React from "react";
import Screen from "../../components/Screen";
import Main from "../../components/Main";
import Topbar from "../../components/Topbar";
import TopPlayersList from "./components/TopPlayersList";
import RecentGamesList from "./components/RecentGamesList";

const Index = () => {
  return (
    <Screen>
      <Topbar />
      <Main>
        <TopPlayersList />
        <RecentGamesList />
      </Main>
    </Screen>
  );
};

export default Index;
