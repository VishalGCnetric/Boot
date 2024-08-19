import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ShoppingCart from "./ShoppingCart";
import NestedMenu from "./NestedMenu";
import { Link, useLocation } from "react-router-dom";
import Loader from "../BackDrop/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../../../action/cart";

// Loader Component
// const Loader = () => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center z-50">
//       <div className="bg-white p-4 rounded shadow-lg flex items-center justify-center space-x-2">
//         <span className="text-gray-700">Loading...</span>
//         <div className="flex space-x-2">
//           <div className="w-3 h-3 bg-indigo-900 rounded-full animate-bounce"></div>
//           <div className="w-3 h-3 bg-indigo-900 rounded-full animate-bounce delay-200"></div>
//           <div className="w-3 h-3 bg-indigo-900 rounded-full animate-bounce delay-400"></div>
//           <div className="w-3 h-3 bg-indigo-900 rounded-full animate-bounce delay-600"></div>
//           <div className="w-3 h-3 bg-indigo-900 rounded-full animate-bounce delay-800"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

const NewNavbar = () => {
  const dispatch = useDispatch();

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const cart = useSelector((store) => store.cartItems.cartItems);
  const wt=localStorage.getItem("wt");
  const wtt=localStorage.getItem("wtt");
  const { user } = useSelector((state) => state.auth);

console.log(wt,wtt,user)
  useEffect(() => {
    dispatch(getCartItems());
  }, [user, wt, wtt]);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    if (open) {
      // Show the loader first
      setLoading(true);

      // Simulate a delay for loading (e.g., fetching data)
      setTimeout(() => {
        setLoading(false); // Hide the loader
        setDrawerOpen(open); // Open the drawer
      }, 1000); // Adjust delay as needed
    } else {
      setDrawerOpen(open); // Close the drawer
    }
  };

  return (
    <>
      <nav className="bg-white w-full shadow-md pb-4">
        <div className="w-full mx-auto px-4 flex justify-between items-center py-4">
          {/* Logo and Search Bar */}
          <div className="flex w-[90%] justify-between items-center gap-4 space-x-4">
            <Link to="/">
              <img
                src="/bvi20logo20v2png@2x.png"
                alt="Boots Logo"
                className="w-24"
              />
            </Link>
            <div className="relative w-full m-2">
              <input
                type="text"
                placeholder="Search products, brands and services..."
                className="border border-gray-300 py-2 px-4 w-full"
              />
              <button className="absolute right-2 top-2 w-5 h-5 text-wwwbootscom-deep-cove">
                <img src="button--search@3x.png" alt="" />
              </button>
            </div>
          </div>

          {/* Right side links */}
          <div className="flex items-center space-x-6">
            <div className="relative">
              <IconButton onClick={toggleDrawer(true)}>
                <img
                  className="h-[26px] w-[26px] relative"
                  alt="bag"
                  src="/img.svg"
                />
              </IconButton>
              <span className="absolute -top-1 -right-1 bg-blue-300  text-wwwbootscom-deep-cove text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cart?.orderItem?.length || 0}
              </span>
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-col relative items-start justify-start pt-2.5 px-4 pb-0 text-mid text-wwwbootscom-congress-blue w-full p-4">
          <ul className="flex flex-row items-center justify-start gap-8 font-semibold ">
            <li className=" group">  
              <a href="#" className="text-[inherit]">
                Shop by department
              </a>
              {/* Dropdown */}
              <div className="w-full h-[80vh] absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-lg py-2 px-4 z-50">
                <NestedMenu />
              </div>
            </li>
            <li className=" group">
              <a href="#" className="text-[inherit]">
                Prescriptions
              </a>
              <div className="w-full h-[80vh] absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-lg py-2 px-4 z-50">
                <NestedMenu />
              </div>
            </li>
            <li>
              <a href="#" className="text-[inherit]">
                Health hub
              </a>
            </li>
            <li>
              <a href="#" className="text-[inherit]">
                Inspire Me
              </a>
            </li>
            <li>
              <a href="#" className="text-[inherit]">
                Offers No7
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Drawer for bag content */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <div
          className="w-[100%] p-4"
          role="presentation"
          onKeyDown={toggleDrawer(false)}
        >
          <ShoppingCart toggleDrawer={toggleDrawer} />
        </div>
      </Drawer>

      {/* Show loader while loading */}
      {isLoading && <Loader />}
    </>
  );
};

export default NewNavbar;
