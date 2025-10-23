import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import AboutUs from "./components/About-us.js";
import ContactUs from "./components/Contact-us.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.js";
import ErrorPage from "./components/ErrorPage.js";
import Restaurant from "./components/Restaurant.js";
import AboutUsClass from "./components/AboutUsClass.js";
import "./index.css";
import "./components/Shimmer/GroceryShimmer.js";
import Shimmer from "./components/Shimmer/ShimmerMain.js";
import UserContext from "./context/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./redux/appStore.js";
import Cart from "./components/Cart.js";

//lazy loading...
const Grocery = lazy(() => import("./components/Grocery.js"));

const AppLayout = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  ///////////Dummy Authentication///////////

  const [userName, setUserName] = useState("Default User");

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUserName(savedUser);
    }
  }, []);
  // save user to local storage using localStorage.setItem("user","Akhil")
  //////////////////////////////////////////
  ////Listen for changes in localStorage (even from other tabs)
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "user") {
        setUserName(e.newValue); // instantly update context
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <Provider store={appStore}>
      <div className="app">
        <UserContext.Provider value={{ loggedinUser: userName, setUserName }}>
          <ScrollToTop />
          <Header onSearch={setSearchTerm} />
          {/* Pass searchTerm to child components via Outlet context */}
          <Outlet context={{ searchTerm }} />
          <Footer />
        </UserContext.Provider>
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/about-us-class",
        element: <AboutUsClass />, //link is not given any whre os use it directly to check how calss component works
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense
            fallback={
              <Shimmer />
            } /*{<div>Loading...</div>*/ /*or can put shimmer*/
          >
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:restId",
        element: <Restaurant />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const rootElement = document.getElementById("root");
const rootDOM = ReactDOM.createRoot(rootElement);
rootDOM.render(<RouterProvider router={appRouter} />);
