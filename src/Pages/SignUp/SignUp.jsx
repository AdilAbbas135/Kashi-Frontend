import React, { useState } from "react";
import { TextField, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignUp() {
  const navigate = useNavigate();
  const [Data, setData] = useState({});

  const handleRoleChange = (e) => {
    setData({ ...Data, AccountType: e.target.value });
  };

  const TrySignUp = async () => {
    await axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/account/createaccount`, Data)
      .then(async (res) => {
        console.log(res);
        navigate("/send-email");
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
  return (
    <div
      className="bg-no-repeat bg-cover h-screen flex justify-center items-center py-12"
      style={{ backgroundImage: "url('/back-bg.jpg')" }}
    >
      <div className="bg-black/40 h-screen w-full flex flex-col">
        <div className="bg-white bg-opacity-50 m-auto flex justify-center items-center flex-col p-10 rounded-lg shadow-md backdrop-filter backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-4 text-center">SignUp</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              TrySignUp();
            }}
            className="space-y-2"
          >
            <div>
              <TextField
                id="outlined-basic"
                label="Enter Your Email"
                variant="outlined"
                type="email"
                required
                value={Data?.Email}
                onChange={(e) => {
                  setData({ ...Data, Email: e.target.value });
                }}
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Enter Your Password"
                variant="outlined"
                type="password"
                required
                value={Data?.Password}
                onChange={(e) => {
                  setData({ ...Data, Password: e.target.value });
                }}
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Confirm Password"
                variant="outlined"
                type="password"
                required
                value={Data?.ConfirmPassword}
                onChange={(e) => {
                  setData({ ...Data, ConfirmPassword: e.target.value });
                }}
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Enter Your CNIC without dashes"
                variant="outlined"
                type="string"
                required
                value={Data?.CNIC}
                onChange={(e) => {
                  setData({ ...Data, CNIC: e.target.value });
                }}
              />
            </div>
            <div>
              <RadioGroup
                aria-label="role"
                name="role"
                value={Data?.AccountType}
                onChange={handleRoleChange}
                row
              >
                <FormControlLabel
                  value="farmer"
                  control={<Radio />}
                  label="Farmer"
                />
                <FormControlLabel
                  value="normal-user"
                  control={<Radio />}
                  label="Buyer/Seller"
                />
              </RadioGroup>
            </div>
            <div className="mt-5">
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 mt-3 rounded-lg"
              >
                SignUp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
