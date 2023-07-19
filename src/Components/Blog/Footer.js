import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="container mx-auto flex flex-wrap justify-between mt-10">
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Green Valley</h3>
          <p className="text-sm mb-2">123 Main Street</p>
          <p className="text-sm mb-2">Suite 100</p>
          <p className="text-sm">San Francisco, CA 94105</p>
        </div>
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Useful Links</h3>
          <ul className="list-reset text-sm">
            <li className="mb-2">
              <a href="#">About Us</a>
            </li>
            <li className="mb-2">
              <a href="#">Blog</a>
            </li>
            <li className="mb-2">
              <a href="#">Contact Us</a>
            </li>
            <li className="mb-2">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="mb-2">
              <a href="#">Terms of Use</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <ul className="list-reset text-sm">
            <li className="mb-2">
              <a href="#">Facebook</a>
            </li>
            <li className="mb-2">
              <a href="#">Twitter</a>
            </li>
            <li className="mb-2">
              <a href="#">Instagram</a>
            </li>
            <li className="mb-2">
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-bold mb-4">Subscribe</h3>
          <p className="text-sm mb-4">
            Sign up to receive our latest news and updates.
          </p>
          <form className="mb-4">
            <input
              type="email"
              className="block w-full rounded-sm py-2 px-3 mb-2 text-sm"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="bg-white text-gray-900 py-2 px-4 rounded-sm text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto pt-4 border-t border-gray-800">
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Green Valley. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
