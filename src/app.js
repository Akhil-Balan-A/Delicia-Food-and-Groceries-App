import React,{lazy, Suspense} from "react";
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
import Shimmer from "./components/Shimmer/GroceryShimmer.js";



//lazy loading...
const Grocery = lazy(() => import("./components/Grocery.js"));


const AppLayout = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  return (
    <div className="app">
      <ScrollToTop />
      <Header onSearch={setSearchTerm} />
      {/* Pass searchTerm to child components via Outlet context */}
      <Outlet context={{ searchTerm }} />
      <Footer />
    </div>
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
        element: <Suspense fallback={<div>Loading...</div> /*or can put shimmer*/ }><Grocery /></Suspense> ,
      },
      {
        path: "/restaurant/:restId",
        element: <Restaurant />,
      }
    ],
    errorElement: <ErrorPage />,
  },
]);

const rootElement = document.getElementById("root");
const rootDOM = ReactDOM.createRoot(rootElement);
rootDOM.render(<RouterProvider router={appRouter} />);
