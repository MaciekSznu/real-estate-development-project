import React from 'react';
import TopMenu from "../../components/Header/TopMenu";
import InvestmentView from "../InvestmentView/InvestmentView";
import LocationView from "../LocationView/LocationView";
import FlatsView from "../FlatsView/FlatsView";
import CompanyView from "../CompanyView/CompanyView";
import ContactView from "../ContactView/ContactView";

const MainView = () => (
  <>
    <TopMenu />
    <InvestmentView />
    <LocationView />
    <FlatsView />
    <CompanyView />
    <ContactView />
  </>
);

export default MainView;