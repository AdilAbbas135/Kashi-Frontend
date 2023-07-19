import React from "react";

function About() {
  return (
    <div className="max-w-[1620px] mx-auto overflow-hidden shadow-lg text-2xl font-medium mt-20  ">
      <h1 className="text-center"> About Us</h1>
      <div className="max-w-[1620px]  mx-auto bg-lime-100 mt-10 px-10 grid lg:grid-cols-2 md:grid-cols-1 ">
        <div className=" basis-[45%] mt-10 flex justify-center items-center ">
          <p className=" px-7 text-center">
            We have Web Base Platform where people will check Vegetables
            Diseases (like Tomato, potato and Chilly) by upload their picture.
            we are giving them the awareness that how they can treat their plant
            so that the production increases and plant live healthy life.We also
            provide them Pesticides to protect plants production. We also tell
            them about gratification and how they can enhance the beauty of
            plants using different tools and techniques. so that they grow the
            plants in different styles like in plastic bottles and on walls.
            Lawncare and landscaping information was also provided.
          </p>
        </div>
        <div className="basis-[45%] mt-5 ">
          <img className=" py-10" src="about.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
