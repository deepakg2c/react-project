import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./componant/Header";
import Body from "./componant/Body";
import React, { useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import About from "./componant/About";
import Contact from "./componant/Contact";
import Error from "./componant/Error";
import User from "./componant/User";
import { Outlet } from "react-router-dom";
import Menu from "./componant/Menu";


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const Router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/menu/:id",
                element: <Menu />
            }
        ],
        errorElement: <Error />
    },

]);


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={Router} />)