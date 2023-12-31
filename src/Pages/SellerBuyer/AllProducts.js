import { CircularProgress, Dialog, DialogActions } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import DashboardUI from "../../Components/SellerBuyer/DashboardUi";
import { Button } from "@material-tailwind/react";

const AllProducts = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [loading, setloading] = useState(true);
  const [deleteLoading, setdeleteLoading] = useState(false);
  const [allProducts, setallProducts] = useState([]);
  const [SelectedTution, setSelectedTution] = useState({});

  // DELETE CONFIRM DIALOG
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const handleCloseConfirmModal = () => {
    setOpenConfirmModal(false);
    setSelectedTution({});
  };
  const handleOpenConfirmModal = () => {
    setOpenConfirmModal(true);
  };

  // GLOBAL FUNCTIONS
  const FetchProducts = () => {
    setloading(true);

    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/products`,
        {},
        { headers: { token: token } }
      )
      .then((result) => {
        console.log(result);
        setallProducts(result.data?.Products);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          err.response.data.error
            ? err.response.data.error
            : "Something Went Wrong! Try Again",
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

  const DeleteProduct = async (product) => {
    setdeleteLoading(true);
    await axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/products/delete/${product?._id}`,
        {},
        { headers: { token: token } }
      )
      .then((result) => {
        console.log(result);
        setdeleteLoading(false);
        toast.success("Deleted Successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // handleCloseConfirmModal();
        FetchProducts();
      })
      .catch((error) => {
        setdeleteLoading(false);
        toast.error(
          error.response.data.error
            ? error.response.data.error
            : "Something Went Wrong! Try Again",
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
        console.log(error);
      });
  };
  useEffect(() => {
    FetchProducts();
    //  eslint-disable-next-line
  }, []);
  return (
    <DashboardUI>
      <div className="">
        <div className="mb-2 flex justify-between">
          <h1 className="font-bold text-text_color text-2xl mb-5 pl-1 border-l-[5px] border-hover_color">
            My Products
          </h1>
          <Link to="/admin/products/add-new">
            <Button
              color="primary"
              className="px-5 py-2 text-[16px] h-fit bg-blue-500 shadow-none hover:shadow-none  font-semibold rounded-md flex items-center justify-center hover:scale-105 transition-all"
            >
              <IoMdAddCircleOutline className="mr-1" /> Add New Product
            </Button>
          </Link>
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
                  className="text-white bg-blue-500 px-5 py-3 shadow-none hover:shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
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
          <div className="grid grid-cols-3 gap-3 gap-y-3">
            {allProducts.length === 0 ? (
              <p className="italic text-red-500">No Services Added Yet</p>
            ) : (
              allProducts.map((elem, index) => {
                return (
                  <div
                    key={index}
                    className="bg-white h-fit rounded-md overflow-hidden border-2 border-gray-200 transition-all hover:shadow-md"
                  >
                    <img
                      src={
                        elem?.Image
                          ? `${
                              process.env.REACT_APP_BACKEND_URL +
                              "/" +
                              elem.Image
                            }`
                          : "/assets/TH1.jpg"
                      }
                      className="h-[150px] w-full object-cover"
                      alt=""
                    />
                    <div className="p-5">
                      <h1 className="font-semibold text-hover_color text-xl mb-1">
                        {elem?.Title}
                      </h1>
                      <p className="text-text_color_secondary_2 text-sm mb-3">
                        {elem?.Description.length > 150 ? (
                          <span>{elem.Description.substring(0, 150)}...</span>
                        ) : (
                          elem.Description
                        )}
                      </p>

                      <div className="flex flex-wrap items-center gap-x-2">
                        <p className="my-3 py-2 w-fit px-3 bg-[#d1ecf1] rounded-md text-sm">
                          Price{" "}
                          <span className="font-bold text-hover_color">
                            {elem?.Price}
                          </span>{" "}
                        </p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Link to={`/plant-store/${elem?._id}`}>
                          <Button className="flex-1 bg-blue-500 shadow-none hover:shadow-none py-2 font-semibold rounded-md flex items-center justify-center hover:bg-main_bg_color transition-all">
                            <BiEditAlt className="mr-1" /> View
                          </Button>
                        </Link>

                        <Button
                          disabled={deleteLoading ? true : false}
                          onClick={() => {
                            DeleteProduct(elem);
                          }}
                          className=" flex-1 bg-transparent border-2 border-red-500 text-red-500 shadow-none hover:shadow-none py-[7px] font-semibold rounded-md flex items-center justify-center hover:text-white hover:bg-red-500 transition-all disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <MdDeleteOutline className="mr-1" /> Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </DashboardUI>
  );
};
export default AllProducts;
