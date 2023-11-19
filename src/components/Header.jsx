import { Link } from "react-router-dom";
import { DataContext } from "../ContextProvider/ContextProvider";
import { useContext } from "react";

const Header = () => {
  
  const { cart } = useContext(DataContext);
  return (
    <nav className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img
            className="w-auto h-6 sm:h-7"
            src="https://merakiui.com/images/full-logo.svg"
            alt
          />
        </Link>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="text-red-500 dark:text-red-900 hover:text-red-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
            aria-label="toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8h16M4 16h16"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-red-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
        <div className="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:-px-8 lg:space-y-0">
          <Link
            className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-red-900 dark:hover:text-blue-400 hover:text-blue-500"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-red-900 dark:hover:text-blue-400 hover:text-blue-500"
            to="/cart"
          >
            Cart
            <span> {cart.length}</span>
          </Link>
          <a
            className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-red-900 dark:hover:text-blue-400 hover:text-blue-500"
            href="#"
          >
            Pricing
          </a>
          <a
            className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-red-900 dark:hover:text-blue-400 hover:text-blue-500"
            href="#"
          >
            Contact
          </a>
        </div>
        <a
          className="block px-5 py-2 mt-4 text-sm text-center text-white capitalize bg-blue-600 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-auto"
          href="#"
        >
          Get started
        </a>
      </div>
    </nav>
  );
};

export default Header;
