import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearSession } from "../../Redux/Redux/SessionRedux";
import { FetchProfile } from "../../Redux/Redux/DashboardData";
import SellerBuyerHeader from "../../Components/SellerBuyer/Header";
import SellerBuyerSidebar from "../../Components/SellerBuyer/Sidebar";
import Loader from "../Loader";

const DashboardUI = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dashboard = useSelector((state) => state.DashboardData);
  const error = useSelector((state) => state.DashboardData.error);
  const [showSidebar, setshowSidebar] = useState(true);

  useEffect(() => {
    dispatch(FetchProfile());
    //eslint-disable-next-line
  }, [dispatch]);
  if (error) {
    dispatch(clearSession());
    navigate("/login", {
      state: { studentPageError: true, error: dashboard?.errorMessage },
    });
  }
  return (
    <>
      <div className="min-h-screen overflow-hidden bg-[#F7F7F7]">
        {dashboard.loading ? (
          <Loader />
        ) : (
          <div>
            <div className="fixed top-0 left-0 z-[500]">
              <SellerBuyerHeader
                setshowSidebar={setshowSidebar}
                showSidebar={showSidebar}
              />
            </div>
            <div className="w-full flex">
              <div
                className={` transition-all ${
                  showSidebar ? "w-[20%] " : "w-0"
                } h-screen  overflow-hidden`}
              >
                <SellerBuyerSidebar
                  showSidebar={showSidebar}
                  // selected={selected}
                  // setselected={setselected}
                />
              </div>
              <div className="mt-[65px] w-full relative pt-5 sm:px-6 md:px-10 lg:mx-auto lg:max-w-7xl">
                {props.children}
              </div>
            </div>
            {/* <Footer /> */}
          </div>
        )}
      </div>
    </>
  );
};

export default DashboardUI;
