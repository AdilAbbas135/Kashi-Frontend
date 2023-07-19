import React from 'react';
import { RiShoppingBagLine } from 'react-icons/ri';

const About = () => {
  return (
    <div className="flex justify-center items-center mt-32">
      <section className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="about__img-container text-center md:text-right">
            <img src="about.png" alt="" className="mx-auto md:ml-0 w-80" />
          </div>

          <div className="text-center md:text-left">
            <h2 className="section__title about__title text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              About <span className="about__title-span">Green Valley</span>
            </h2>
            <p className="about__description text-base md:text-lg mt-4 md:mt-6">
              We are a company that specializes in creating plant designs for your offices, apartments, or any other space. Our goal is to bring freshness and beauty to your environment, making your life better.
            </p>
            <div className="mt-12 md:mt-6 flex justify-center md:justify-start">
              <a href="#products" className="button w-36  h-12 px-3 py-2 bg-green-500 text-white text-base md:text-lg rounded-full transition-colors duration-300 ease-in-out hover:bg-green-600 hover:text-gray-100 transform hover:scale-105 flex items-center">
                Shop Now <RiShoppingBagLine className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
