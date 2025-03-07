import React from "react";
import Headers from "./Components/Headers";
import { Provider } from "react-redux";
import appstore from "./Utils/Appstore"

import { Outlet } from "react-router-dom";

const App = () => {
  return (      
    <div>
    <Provider store={appstore}>
    <Headers/>
    <Outlet/>
    </Provider>
    </div>
)
}


export default App;
