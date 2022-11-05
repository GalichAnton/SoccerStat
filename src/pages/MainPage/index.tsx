import React from "react";

import CompetitionList from "@components/CompetitionList";
import MainLayout from "@pages/MainLayout";

const MainPage = () => {
  return (
    <MainLayout>
      <CompetitionList />
    </MainLayout>
  );
};

export default MainPage;
