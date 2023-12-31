import DashboardUI from "../../Components/SellerBuyer/DashboardUi";
import { Button } from "@material-tailwind/react";
import { CircularProgress, TextField, TextareaAutosize } from "@mui/material";
import axios from "axios";
import React, { useRef, useState } from "react";
import { RxReader } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditProduct = ({ id }) => {
  const token = localStorage.getItem("token");
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();
  const Fileref = useRef();
  const navigate = useNavigate();
  const [TutionData, setTutionData] = useState({});
  const [File, setFile] = useState({});
  const [addLoading, setaddLoading] = useState(false);
  const [Preview, setPreview] = useState(false);
  const [Subjects, setSubjects] = useState([]);
  const [Errors, setErrors] = useState({
    SubjectError: false,
    FileError: false,
  });

  const ShowPreviewImage = (event) => {
    if (event.target.files.length > 0) {
      var src = URL.createObjectURL(event.target.files[0]);
      var preview = document.getElementById("file-ip-1-preview");
      preview.src = src;
      setErrors({ ...Errors, FileError: false });
      setPreview(true);
      setFile(event.target.files[0]);
      //   preview.style.display = "block";
    }
  };
  const AddProduct = async () => {
    // setaddLoading(true)
    let Data = new FormData();
    Data.append("file", File);
    Data.append("Data", JSON.stringify(TutionData));
    await axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/products/add`, Data, {
        headers: { token: token },
      })
      .then((result) => {
        console.log(result);
        setTutionData({});
        setFile({});
        setaddLoading(false);
        toast.success("Product Added Successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/admin/products");
      })
      .catch((err) => {
        console.log(err);
        setaddLoading(false);
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
  return (
    <>
      <DashboardUI>
        <div className="mb-10">
          <h1 className="font-bold text-text_color text-2xl mb-5 pl-2 border-l-[5px] border-hover_color">
            Add a New Product
          </h1>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              AddProduct();
            }}
          >
            <div className="bg-white p-10 rounded-md shadow-sm grid grid-cols-1 gap-x-5 gap-y-5">
              <div className="col-span-1">
                <TextField
                  name="Title"
                  id="Title"
                  type={"text"}
                  required
                  label="Title"
                  className="w-full mt-1"
                  variant="outlined"
                  size="medium"
                  value={TutionData?.Title}
                  onChange={(e) => {
                    setTutionData({
                      ...TutionData,
                      Title: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="col-span-1">
                <label
                  for="description"
                  className="font-semibold text-text_color_secondary_2"
                >
                  Description of your product
                </label>
                <TextareaAutosize
                  id="description"
                  name="description"
                  aria-label="minimum height"
                  minRows={5}
                  required
                  minLength={5}
                  placeholder="Description of your product"
                  className="w-full border px-2 py-4"
                  value={TutionData?.Description}
                  onChange={(e) => {
                    setTutionData({
                      ...TutionData,
                      Description: e.target.value,
                    });
                  }}
                />
              </div>

              <TextField
                id="price"
                type={"number"}
                required
                label="Price"
                className="w-full"
                variant="outlined"
                size="medium"
                value={TutionData?.Price}
                onChange={(e) => {
                  setTutionData({
                    ...TutionData,
                    Price: e.target.value,
                  });
                }}
              />

              <div className="col-span-1">
                <div className="flex items-center justify-between">
                  <h3
                    className={`font-semibold ${
                      Errors.FileError
                        ? "text-red-500"
                        : "text-text_color_secondary_2"
                    }`}
                  >
                    Choose Picture:
                  </h3>
                  {Errors.FileError && (
                    <p className="text-red-500 italic">
                      {" "}
                      Image Field is Required
                    </p>
                  )}
                </div>

                <div
                  className={`${
                    Preview ? "block" : "hidden"
                  } grid grid-cols-10 gap-5`}
                >
                  <div className={`h-64 w-full col-span-8`}>
                    <img
                      id="file-ip-1-preview"
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div
                    className={`flex flex-col items-center justify-center gap-3 col-span-2`}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      onClick={() => Fileref.current.click()}
                      className="w-full h-fit text-[16px] bg-blue-500 flex items-center justify-center shadow-none hover:shadow-none rounded-[4px] font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Change Picture
                    </Button>

                    <Button
                      variant="contained"
                      size="large"
                      onClick={() => {
                        setPreview(false);
                        setFile(null);
                      }}
                      className="w-full h-fit text-[16px] bg-red-500 flex items-center justify-center shadow-none hover:shadow-none rounded-[4px] font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Remove
                    </Button>
                  </div>
                </div>

                <div>
                  <div
                    className={`${
                      Preview ? "hidden" : "block"
                    } flex items-center justify-center w-full`}
                  >
                    <label
                      for="dropzone-file"
                      className={`bg-gray-50 flex flex-col items-center justify-center w-full h-64 border-2 ${
                        Errors.FileError ? "border-red-500" : "border-gray-300"
                      }  border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          aria-hidden="true"
                          className={`w-10 h-10 mb-3 text-gray-400 ${
                            Errors.FileError ? "text-red-500" : "text-gray-500 "
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          ></path>
                        </svg>
                        <p
                          className={`mb-2 text-sm ${
                            Errors.FileError ? "text-red-500" : "text-gray-500 "
                          }`}
                        >
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p
                          className={`text-xs ${
                            Errors.FileError ? "text-red-500" : "text-gray-500 "
                          }`}
                        >
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        ref={Fileref}
                        type="file"
                        className="hidden"
                        onChange={ShowPreviewImage}
                        accept="image/*"
                      />
                    </label>
                  </div>
                  {Errors.FileError && (
                    <p className="text-red-500 italic">
                      {" "}
                      Image Field is Required
                    </p>
                  )}
                </div>
              </div>
              <div className="col-span-1 mt-5">
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={addLoading ? true : false}
                  className="w-full text-[16px] bg-blue-500 flex items-center justify-center shadow-none hover:shadow-none rounded-[4px] font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {addLoading ? (
                    <CircularProgress
                      size={18}
                      disableShrink
                      sx={{ color: "white" }}
                    />
                  ) : (
                    <>
                      <RxReader className="mr-1" />
                      Add Product
                    </>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </DashboardUI>
    </>
  );
};

export default EditProduct;
