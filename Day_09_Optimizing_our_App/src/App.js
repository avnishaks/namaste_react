import React, { Suspense, createElement, lazy } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Title from "./components/Title";
import Body from "./components/Body";
import RestrauntCard from "./components/ResataurantCard";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';


const Grocery =lazy(()=>import("./components/Grocery"))

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRoute=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>,
       
      },
      {
        path:"/about",
        element:<About/>,
        
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/resturant/:resId",
        element:<RestaurantMenu/>,
      },
      {
        path:"/grocery",
        element: <Suspense fallback={<h1>Loading .... Grocery... Wait ... Wait </h1>}><Grocery/></Suspense> 
      }
    ],
    errorElement: <Error/>
  }
  
]);
 
ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={appRoute} />);
