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

          {/* <div className="products__card flex flex-col items-center">
            <div className="relative bg-gray-200 rounded-full w-40 h-40 flex items-center justify-center overflow-hidden">
              <img
                src="product2.png"
                alt=""
                className="products__img w-full h-full transition-transform duration-300 hover:-translate-y-2"
              />
            </div>
            <div className="products__data text-center font-bold mt-4">
              <h3 className="products__name">Cactus Plant</h3>
              <span className="products__price">$19.99</span>
              <div>
                <button className="button w-28 h-8 button--flex button--small aspect-square bg-green-600 hover:bg-green-800 rounded-lg text-white mt-2">
                  <i className="ri-shopping-cart-line button__icon mr-2"></i>{" "}
                  Buy now
                </button>
              </div>
            </div>
          </div>

          <div className="products__card flex flex-col items-center">
            <div className="relative bg-gray-200 rounded-full w-40 h-40 flex items-center justify-center overflow-hidden">
              <img
                src="product3.png"
                alt=""
                className="products__img w-full h-full transition-transform duration-300 hover:-translate-y-2"
              />
            </div>
            <div className="products__data text-center font-bold mt-4">
              <h3 className="products__name">Aloe Vera Plant</h3>
              <span className="products__price">$19.99</span>
              <div>
                <button className="button w-28 h-8 button--flex button--small aspect-square bg-green-600 hover:bg-green-800 rounded-lg text-white mt-2">
                  <i className="ri-shopping-cart-line button__icon mr-2"></i>{" "}
                  Buy now
                </button>
              </div>
            </div>
          </div>

          <div className="products__card flex flex-col items-center">
            <div className="relative bg-gray-200 rounded-full w-40 h-40 flex items-center justify-center overflow-hidden">
              <img
                src="product4.png"
                alt=""
                className="products__img w-full h-full transition-transform duration-300 hover:-translate-y-2"
              />
            </div>
            <div className="products__data text-center font-bold mt-4">
              <h3 className="products__name">Succulent Plant</h3>
              <span className="products__price">$19.99</span>
              <div>
                <button className="button w-28 h-8 button--flex button--small aspect-square bg-green-600 hover:bg-green-800 rounded-lg text-white mt-2">
                  <i className="ri-shopping-cart-line button__icon mr-2"></i>{" "}
                  Buy now
                </button>
              </div>
            </div>
          </div>

          <div className="products__card flex flex-col items-center">
            <div className="relative bg-gray-200 rounded-full w-40 h-40 flex items-center justify-center overflow-hidden">
              <img
                src="product5.png"
                alt=""
                className="products__img w-full h-full transition-transform duration-300 hover:-translate-y-2"
              />
            </div>
            <div className="products__data text-center font-bold mt-4">
              <h3 className="products__name">Succulent Plant</h3>
              <span className="products__price">$19.99</span>
              <div>
                <button className="button w-28 h-8 button--flex button--small aspect-square bg-green-600 hover:bg-green-800 rounded-lg text-white mt-2">
                  <i className="ri-shopping-cart-line button__icon mr-2"></i>{" "}
                  Buy now
                </button>
              </div>
            </div>
          </div>

          <div className="products__card flex flex-col items-center">
            <div className="relative bg-gray-200 rounded-full w-40 h-40 flex items-center justify-center overflow-hidden">
              <img
                src="product6.png"
                alt=""
                className="products__img w-full h-full transition-transform duration-300 hover:-translate-y-2"
              />
            </div>
            <div className="products__data text-center font-bold mt-4">
              <h3 className="products__name">Green Plant</h3>
              <span className="products__price">$19.99</span>
              <div>
                <button className="button w-28 h-8 button--flex button--small aspect-square bg-green-600 hover:bg-green-800 rounded-lg text-white mt-2">
                  <i className="ri-shopping-cart-line button__icon mr-2"></i>{" "}
                  Buy now
                </button>
              </div>
            </div>
          </div> */}

          {/* Add more product cards here */}
        </div>
      </section>
    </div>
  );
};

export default Products;
