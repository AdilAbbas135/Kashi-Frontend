import React from "react";

const Home = () => {
  return (
    <div className="flex justify-center">
      <section className="bg-gray-100 py-10" id="home">
        <div className="home__container container grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="md:text-right">
            <img
              src="home.png"
              alt=""
              className="home__img mx-auto md:mr-12 w-80"
            />
          </div>

          <div className="home__data text-center md:text-left">
            <h1 className="home__title text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Welcome to our Blog
            </h1>
            <p className="home__description text-base md:text-lg mt-4 md:mt-6">
              your go-to resource for all things related to gardening and
              plants. Discover a wealth of valuable information, tips, and
              advice to help you cultivate a beautiful and thriving garden.
            </p>
            <div className="home__social mt-8 md:mt-0 text-center md:text-right"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
