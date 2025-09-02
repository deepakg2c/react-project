import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./componant/Header";
import Body from "./componant/Body";
import React, { useState } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import About from "./componant/About";
import Contact from "./componant/Contact";
import Error from "./componant/Error";


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const Router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/contact",
        element: <Contact />
    }
]);


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={Router} />)