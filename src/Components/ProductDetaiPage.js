import { Backdrop, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";

const ProductDetailPage = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  const [PageLoading, setPageLoading] = React.useState(true);
  const [Product, setProduct] = useState({});
  const [PaymentLoading, setPaymentLoading] = useState(false);

  const stripeKey =
    "pk_test_51JGojQHB8vwABSSpHM2xByAZIfXbe0OIFVUmcrexiKkJmzHZAAj8457O7BuGXCiNkzQWWKpWsUiLQJj6ZTDXIpCS00RsoWj3HG";
  const [StripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    console.log(token);
    setStripeToken(token);
  };

  useEffect(() => {
    if (StripeToken) {
      setPaymentLoading(true);
      axios
        .post(
          `${process.env.REACT_APP_BACKEND_URL}/payment`,
          {
            tokenId: StripeToken?.id,
            amount: Product?.Price,
            ProductId: Product?._id,
          },
          { headers: { token: token } }
        )
        .then((res) => {
          setPaymentLoading(false);
          console.log(res);
          toast.success("Order Placed Successfully", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        })
        .catch((err) => {
          setPaymentLoading(false);
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
          console.log(err);
        });
    }
    //eslint-disable-next-line
  }, [StripeToken]);

  const FetchProduct = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/find/products/${location.pathname
          .split("/")
          .slice(-1)}`
      )
      .then(async (res) => {
        console.log(res.data);
        setProduct(res.data.Product);
        setPageLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          err.response.data.error
            ? err.response.data.error
            : "Something Went Wrong in Placing Order! Try Again",
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

  React.useEffect(() => {
    FetchProduct();
  }, []);
  // Example product data
  const product = {
    name: "Product Name",
    description:
      "If you're developing an application, you'll want to make sure you're testing it under conditions that closely simulate a production environment. In production, you'll have an army of users banging away at your app and filling your database with data, which puts stress on your code. If you're hand-entering data into a test environment one record at a time using the UI, you're never going to build up the volume and variety of data that your app will accumulate in a few days in production. Worse, the data you enter will be biased towards your own usage patterns and won't match real-world usage, leaving important bugs undiscovered.",
    imageUrl: "image1.jpg",
  };

  const handleBuyNow = () => {
    // Logic for buying the product
  };

  return (
    <div>
      {PageLoading ? (
        <div className="h-screen flex items-center justify-center gap-2">
          <CircularProgress size={20} />
          <p>Loading..</p>{" "}
        </div>
      ) : (
        <>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={PaymentLoading}
          >
            <div className="flex items-center justify-center gap-3">
              <CircularProgress color="inherit" />{" "}
              <p>Making Payment! Please Wait</p>
            </div>
          </Backdrop>
          <div className="container mx-auto mt-8">
            <div className="flex flex-wrap items-center justify-center">
              <div className="w-full md:w-1/2">
                <img
                  src={
                    Product?.Image
                      ? `${
                          process.env.REACT_APP_BACKEND_URL +
                          "/" +
                          Product.Image
                        }`
                      : "product1.png"
                  }
                  alt={product.name}
                  className="w-full h-auto"
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0">
                <h2 className="text-2xl font-bold mb-4">{Product?.Title}</h2>
                <p className="text-lg mb-4">{Product?.Description}</p>
                <p className="text-lg mb-4">Rs{Product?.Price}</p>

                <StripeCheckout
                  name="GREEN VALLEY PAYMENTS"
                  image="/assets/chainraise_logo_black_text.jpeg"
                  billingAddress
                  shippingAddress
                  description={`Your Total is Rs. ${Product?.Price}`}
                  amount={Product?.Price}
                  token={onToken}
                  stripeKey={stripeKey}
                  className="cursor-pointer hidden"
                >
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleBuyNow}
                  >
                    Buy Now
                  </button>
                </StripeCheckout>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetailPage;
