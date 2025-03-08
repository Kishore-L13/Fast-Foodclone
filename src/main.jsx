import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx'
import About from "./Components/Header-item/About.jsx";
import Errorapp from "./Components/Header-item/Errorapp"
import Body from "./Components/Body"
import Contact from "./Components/Header-item/Contact"
import RestaurantMenu from "./Components/RestaurantMenu"
import Cart from "./Components/Header-item/Cart"
import { lazy, Suspense } from 'react';
const Grocery = lazy(()=>import("./Components/Header-item/Grocery"))
const Approuter = createBrowserRouter([
  {
      path:"/",
      element:<App/>,
      errorElement:<Errorapp/>,
      children:[
  {
      path:"/",
      element:<Body/>
  },
  {
      path:"/about",
      element:<About/>
  },
  {
      path:"/Grocery",
      element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
  },
  {
      path:"/Contact",
      element:<Contact/>
  },{
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>
  }, {
      path:"/cart",
      element:<Cart/>
  }
  ]
  },
  ]);

const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={Approuter}/>
)
