import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { TiShoppingCart } from 'react-icons/ti';
import { GoPackage } from 'react-icons/go';

const Steps = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <section className="steps section container mx-auto px-4 py-8" id="steps">
        <h2 className="section__title text-3xl text-center font-bold">How it Works</h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="steps__content flex flex-col items-center text-center hover:bg-gray-200 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer">
            <div className="steps__number flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white text-3xl hover:text-4xl">
              <FaCheckCircle />
            </div>
            <h3 className="text-xl font-semibold mt-4">Choose your plants</h3>
            <p className="mt-2">
              Browse our wide range of plants and choose the ones that best suit your needs and preferences.
            </p>
          </div>

          <div className="steps__content flex flex-col items-center text-center hover:bg-gray-200 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer">
            <div className="steps__number flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white text-3xl hover:text-4xl">
              <TiShoppingCart />
            </div>
            <h3 className="steps__title text-xl font-semibold mt-4">Order and pay online</h3>
            <p className="steps__description mt-2">
              Place your order and make the payment online using our secure payment gateway.
            </p>
          </div>

          <div className="steps__content flex flex-col items-center text-center hover:bg-gray-200 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer">
            <div className="steps__number flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white text-3xl hover:text-4xl">
              <GoPackage />
            </div>
            <h3 className="steps__title text-xl font-semibold mt-4">Get your plants delivered</h3>
            <p className="steps__description mt-2">
              Sit back and relax while we deliver your chosen plants right to your doorstep.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Steps;
