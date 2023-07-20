import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Products = () => {
  const [loading, setloading] = useState(true);
  const [allProducts, setallProducts] = useState([]);

  const FetchProducts = () => {
    setloading(true);
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/find/products`)
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
    FetchProducts();
    //  eslint-disable-next-line
  }, []);
  return (
    <div className="flex justify-center">
      <section className="products section container" id="products">
        <h2 className="text-3xl text-center font-bold">Our Products</h2>
        {loading ? (
          <div className="mt-5 flex items-center justify-center gap-2">
            <CircularProgress size={20} />
            <p>Loading..</p>{" "}
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {allProducts.map((product, index) => (
              <div className="products__card flex flex-col items-center">
                <div className="relative bg-gray-200 rounded-full w-40 h-40 flex items-center justify-center overflow-hidden">
                  <img
                    src={
                      product?.Image
                        ? `${
                            process.env.REACT_APP_BACKEND_URL +
                            "/" +
                            product.Image
                          }`
                        : "product1.png"
                    }
                    alt=""
                    className="products__img w-full h-full transition-transform duration-300 hover:-translate-y-2"
                  />
                </div>
                <div className="products__data text-center font-bold mt-4">
                  <h3 className="products__name">{product?.Title}</h3>
                  <span className="products__price">Rs. {product.Price}</span>
                  <div>
                    <Link to={`${product?._id}`}>
                      <button className="button w-28 h-8 button--flex button--small aspect-square bg-green-600 hover:bg-green-800 rounded-lg text-white mt-2">
                        <i className="ri-shopping-cart-line button__icon mr-2"></i>{" "}
                        View Product
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Products;
