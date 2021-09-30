import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import React, { Fragment, useEffect } from "react";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/logs/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";
import { Provider } from "react-redux";
import store from "./store";
const App = () => {
  useEffect(() => {
    //Initalize material JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar></SearchBar>
        <div className="container">
          <AddBtn></AddBtn>
          <AddLogModal></AddLogModal>
          <EditLogModal />
          <AddTechModal></AddTechModal>
          <TechListModal></TechListModal>
          <Logs></Logs>
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
