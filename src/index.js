import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PlantStorePage from "./Pages/PlantStore";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp/SignUp";
import AdminPanel from "./Components/Plant Store/AdminPanel";
import PlantBlog from "./Pages/Blog";
import Chat from "./Components/LiveChat/Chat";
import Disease from "./Components/Disease";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SendEmail from "./Pages/SignUp/SendEmail";
import Emailverification from "./Pages/SignUp/EmailVerification";
import { Provider } from "react-redux";
import store from "./Redux/Redux/store";
import SellerBuyerDashboard from "./Pages/SellerBuyer/dashboard";
import AllProducts from "./Pages/SellerBuyer/AllProducts";
import AddProduct from "./Pages/SellerBuyer/AddProduct";
import ProductDetailPage from "./Components/ProductDetaiPage";
import Bookings from "./Pages/SellerBuyer/Orders";
import EditProduct from "./Pages/SellerBuyer/EditProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/plant-store",
    element: <PlantStorePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/123",
    element: <AdminPanel />,
  },
  {
    path: "/blog-page",
    element: <PlantBlog />,
  },
  {
    path: "/live-chat",
    element: <Chat />,
  },
  {
    path: "/disease",
    element: <Disease />,
  },
  {
    path: "/blog",
    element: <PlantBlog />,
  },
  {
    path: "/send-email",
    element: <SendEmail />,
  },
  { path: "/auth/signup/emailverification", element: <Emailverification /> },
  {
    path: "/admin",
    element: <SellerBuyerDashboard />,
  },
  {
    path: "/admin/products",
    element: <AllProducts />,
  },
  {
    path: "/admin/products/add-new",
    element: <AddProduct />,
  },

  {
    path: "/plant-store/:id",
    element: <ProductDetailPage />,
  },
  {
    path: "/admin/orders",
    element: <Bookings />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ToastContainer />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>
);
