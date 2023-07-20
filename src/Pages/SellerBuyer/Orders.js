import React, { useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import { AiFillEye } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import moment from "moment/moment";
import DashboardUI from "../../Components/SellerBuyer/DashboardUi";

const Bookings = () => {
  const [loading, setloading] = useState(true);
  const [AllOrders, setAllOrders] = useState([]);
  // GLOBAL FUNCTIONS
  const FetchOrders = () => {
    setloading(true);
    const token = localStorage.getItem("token");
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/account/orders`,
        {},
        { headers: { token: token } }
      )
      .then((result) => {
        console.log(result);
        setAllOrders(result.data?.Orders);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          err.response.data.error
            ? err.response.data.error
            : "Something Went Wrong in Fetching Products! Try Again",
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
      });
  };

  useEffect(() => {
    FetchOrders();
    //  eslint-disable-next-line
  }, []);

  return (
    <DashboardUI>
      <div className="">
        <div className=" flex justify-between">
          <h1 className="font-bold text-text_color text-2xl mb-5 pl-1 border-l-[5px] border-hover_color">
            ALL OF YOUR PRODUCTS ORDERS
          </h1>
        </div>

        {/* {openConfirmModal && (
        <Dialog
          open={openConfirmModal}
          onClose={handleCloseConfirmModal}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className="px-10 py-5 flex flex-col items-center justify-center space-y-3">
            <img
              src="/assets/icons8-warning-shield-64.png"
              className="h-[100px] w-[100px] object-cover"
              alt=""
            />
            <h1 className="text-2xl font-bold">
              Do You Really Want to delete?
            </h1>
            <p className="px-3 py-1 bg-blue-200 w-fit font-semibold italic rounded-sm">
              {SelectedTution?.Title}
            </p>
            <DialogActions>
              <Button
                onClick={handleCloseConfirmModal}
                className="text-red-500 border border-red-500 px-5 py-3 shadow-none hover:shadow-none"
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  DeleteTution();
                }}
                disabled={deleteLoading ? true : false}
                className="text-white bg-hover_color px-5 py-3 shadow-none hover:shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {deleteLoading ? (
                  <CircularProgress
                    size={18}
                    disableShrink
                    sx={{ color: "white" }}
                  />
                ) : (
                  <>Confirm</>
                )}
              </Button>
            </DialogActions>
          </div>
        </Dialog>
      )} */}

        {loading ? (
          <div className="min-h-[100px] w-full flex space-x-2 items-center justify-center">
            <CircularProgress disableShrink /> <h1>Loading..</h1>
          </div>
        ) : (
          <div className="">
            <div className="">
              {AllOrders.length === 0 ? (
                <p className="italic text-red-500">No Orders Recieved Yet</p>
              ) : (
                <>
                  <table className="min-w-full rounded border">
                    <thead className="bg-white">
                      <tr>
                        <th className="border-b-2 border-gray-200 bg-inherit px-5 py-3 text-left text-sm font-semibold uppercase tracking-wider text-gray-700">
                          S#
                        </th>
                        <th className="border-b-2 border-gray-200 bg-inherit px-5 py-3 text-left text-sm font-semibold uppercase tracking-wider text-gray-700">
                          Name
                        </th>
                        <th className="border-b-2 border-gray-200 bg-inherit px-5 py-3 text-left text-sm font-semibold uppercase tracking-wider text-gray-700">
                          Amount Paid
                        </th>
                        <th className="border-b-2 border-gray-200 bg-inherit px-5 py-3 text-left text-sm font-semibold uppercase tracking-wider text-gray-700">
                          Date/Time
                        </th>
                        <th className="border-b-2 border-gray-200 bg-inherit px-5 py-3 text-left text-sm font-semibold uppercase tracking-wider text-gray-700">
                          Price
                        </th>
                        <th className="border-b-2 border-gray-200 bg-inherit px-5 py-3 text-left text-sm font-semibold uppercase tracking-wider text-gray-700">
                          Product
                        </th>
                        <th className="border-b-2 border-gray-200 bg-inherit px-5 py-3 text-left text-sm font-semibold uppercase tracking-wider text-gray-700">
                          Reciept
                        </th>
                        {/* <th className="border-b-2 border-gray-200 bg-inherit px-5 py-3 text-left text-sm font-semibold uppercase tracking-wider text-gray-700">
                          Actions
                        </th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {AllOrders.map((Order, index) => (
                        <tr
                          className="border-b border-gray-300 bg-white text-sm cursor-pointer hover:bg-gray-100 transition-all"
                          key={index}
                        >
                          <td className="py-3 px-5">
                            <div className="flex">
                              <div className="pl-2 pt-1">{index + 1}</div>
                            </div>
                          </td>
                          <td className="py-3 px-5">
                            {Order?.StripeDetails?.source?.name
                              ? Order?.StripeDetails?.source?.name
                              : "Not Mentioned"}
                          </td>
                          <td className="py-3 px-5">
                            {Order?.StripeDetails?.amount_captured
                              ? Order?.StripeDetails?.amount_captured
                              : "Not Found"}
                          </td>
                          <td className="py-3 px-5">
                            {" "}
                            {moment(Order?.createdAt).format("DD/MM/YYYY")}
                          </td>
                          <td className="py-3 px-5">
                            RS:{" "}
                            {Order?.Product[0]?.Price
                              ? Order?.Product[0]?.Price
                              : "Not Found"}
                          </td>
                          <td className="py-3 px-5">
                            <Link to={`/plant-store/${Order?.Product[0]?._id}`}>
                              {Order?.Product[0]?.Image ? (
                                <img
                                  src={
                                    Order?.Product[0]?.Image
                                      ? process.env.REACT_APP_BACKEND_URL +
                                        "/" +
                                        Order?.Product[0]?.Image
                                      : "/home.png"
                                  }
                                  className="h-[50px] w-auto object-contain rounded-md"
                                  alt=""
                                />
                              ) : (
                                <button className="text-white w-full py-2 px-2 bg-blue-500 rounded-md">
                                  View Product
                                </button>
                              )}
                            </Link>
                          </td>
                          <td className="py-3 px-5">
                            <a
                              href={`${Order?.StripeDetails?.receipt_url}`}
                              target="_blank"
                              rel="noreferrer"
                              className="w-full py-2 px-2 rounded-md text-sm bg-blue-500 text-white"
                            >
                              View Reciept
                            </a>
                          </td>

                          {/* <td className="py-3 px-5 flex items-center gap-2">
                            <Link
                              to={`/user/hall-manager/bookings/${Order._id}`}
                              className="edit-btn p-2 rounded-lg bg-[#fff8dd] hover:bg-[#ffc700] text-[#ffc700] hover:text-white transition-all"
                            >
                              <AiFillEye
                                size={20}
                                className="text-inherit edit-icon"
                              />
                            </Link>
                            
                            <a
                              // onClick={() => deleteOffering(offering._id)}
                              className={`delete-btn bg-[#fff5f8] p-2 rounded-lg hover:bg-[#f1416c] text-[#f1416c] hover:text-white transition-all cursor-pointer`}
                            >
                              <MdDelete
                                size={20}
                                className="delete-icon text-inherit"
                              />
                            </a>
                          </td> */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </DashboardUI>
  );
};

export default Bookings;
