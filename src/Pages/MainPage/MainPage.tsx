import React from "react";

import CompetitionList from "../../components/CompetitionList/CompetitionList";
import MainLayout from "../MainLayout/MainLayout";

const MainPage = () => {
  return (
    <MainLayout>
      <CompetitionList />
    </MainLayout>
  );
};

export default MainPage;
