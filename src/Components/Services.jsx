import React from "react";

export default function About() {
  return (
    <div>
      <h1 className="text-2xl text-center  mt-5 font-medium py-5">
        Our Services
      </h1>
      <div className="max-w-[1620px] mt-5 mx-auto gap-5 px-5 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 ">
        <div className="shadow-lg overflow-hidden  cursor-pointer">
          <img
            className="rounded hover:scale-[1.05] duration-300"
            src="store.jpg"
            alt=""
          />
          <h1 className="text-center text-xl font-medium">Plant Store</h1>
        </div>

        <div className="shadow-lg overflow-hidden  cursor-pointer">
          <img
            className="rounded hover:scale-[1.05] duration-300"
            src="tomato.jpg"
            alt=""
          />
          <h1 className="text-center text-xl font-medium">
            Tomato Disease detection
          </h1>
        </div>

        <div className="shadow-lg overflow-hidden  cursor-pointer">
          <img
            className="rounded hover:scale-[1.05] duration-300"
            src="budding.jpg"
            alt=""
          />
          <h1 className="text-center text-xl font-medium">Plant Budding</h1>
        </div>

        <div className="shadow-lg overflow-hidden  cursor-pointer">
          <img
            className="rounded hover:scale-[1.05] duration-300"
            src="gratify.jpg"
            alt=""
          />
          <h1 className="text-center text-xl font-medium">
            Plant Gratification
          </h1>
        </div>
      </div>

      <div className="max-w-[1620px] mt-5 mx-auto gap-5 px-5 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  ">
        <div className="shadow-lg overflow-hidden  cursor-pointer ">
          <img
            className='rounded data-aos="flip-left hover:scale-[1.05] duration-300'
            src="lawn.jpg"
            alt=""
          />
          <h1 className="text-center text-xl font-medium">Lawn Care</h1>
        </div>

        <div className="shadow-lg overflow-hidden  cursor-pointer">
          <img
            className="rounded hover:scale-[1.05] duration-300"
            src="gardening.jpg"
            alt=""
          />
          <h1 className="text-center text-xl font-medium">Gardening</h1>
        </div>

        <div className="shadow-lg overflow-hidden  cursor-pointer">
          <img
            className="rounded hover:scale-[1.05] duration-300"
            src="tips.jpg"
            alt=""
          />
          <h1 className="text-center text-xl font-medium">Tips & Tricks</h1>
        </div>

        <div className="shadow-lg overflow-hidden  cursor-pointer">
          <img
            className="rounded hover:scale-[1.05] duration-300"
            src="expert.jpg"
            alt=""
          />
          <h1 className="text-center text-xl font-medium">Our Experts</h1>
        </div>
      </div>
    </div>
  );
}
