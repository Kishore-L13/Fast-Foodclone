import React from "react";
import Headers from "./Components/Headers";
import { Provider } from "react-redux";
import appstore from "./Utils/Appstore"
import {Outlet } from "react-router-dom";
import { useState,useEffect,useContext } from "react";
import UserContext from "./Utils/UserContext";

const App = () => {
  const [userName, setUserName] = useState();
  //authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "ABC",
    };
    setUserName(data.name);
  },[]);
  return (      
    <div>
    <Provider store={appstore}>
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
    <Headers/>
    <Outlet/>
    </UserContext.Provider>
    </Provider>
    </div>
)
}
export default App;
