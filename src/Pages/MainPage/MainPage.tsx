import React from "react";
import MainLayout from "../MainLayout/MainLayout";
import CompetitionList from "../../components/CompetitionList/CompetitionList";
import SearchBar from "../../components/generic/SearchBar/SearchBar";

const MainPage = () => {
  return (
    <MainLayout>
      <SearchBar />
      <CompetitionList />
    </MainLayout>
  );
};

export default MainPage;
