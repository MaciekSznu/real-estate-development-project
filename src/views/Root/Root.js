import React from "react";
import "./index.css";
import AppContext from '../../context';
import TopMenu from "../../components/Header/TopMenu";
import InvestmentView from "../InvestmentView/InvestmentView";
import LocationView from "../LocationView/LocationView";
import FlatsView from "../FlatsView/FlatsView";
import CompanyView from "../CompanyView/CompanyView";
import ContactView from "../ContactViev/ContactView";

const Root = () => (
  <AppContext.Provider>
    <TopMenu />
    <InvestmentView />
    <LocationView />
    <FlatsView />
    <CompanyView />
    <ContactView />
  </AppContext.Provider>
);

export default Root;
