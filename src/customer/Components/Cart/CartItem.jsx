import React from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  removeCartItem,
  updateCartItem,
} from "../../../Redux/Customers/Cart/Action";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import {
  RemoveCartItemNew,
  getCartItems,
  handleRemoveItemFromCart,
} from "../../../action/cart";
import { grey } from "@mui/material/colors";
const cardClasses = "max-w-sm mx-auto p-4 mb-2 border-1 bg-white dark:bg-card shadow-lg rounded-lg";
const textClasses = "text-zinc-500 dark:text-zinc-400";
const buttonClasses = "bg-zinc-200 dark:bg-zinc-600 p-2";
const borderClasses = "border border-zinc-300 dark:border-zinc-500";
const labelClasses = "mr-4 text-zinc-600 dark:text-zinc-400";
const CartItem = ({
  item,
  showButton,
  handleRemoveItemFromCart,
  handleUpdateCartMinus,
  handleUpdateCartPlus,
}) => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  // const { cartItems } = useSelector((store) => store);

  // const handleRemoveItemFromCart = () => {

  //   RemoveCartItemNew(item.id).then((res)=>{
  //     dispatch(getCartItems());

  //   })
  // };
  const handleUpdateCartItem = (num) => {
    const data = {
      data: { quantity: item.quantity + num },
      cartItemId: item?._id,
      jwt,
    };
    // console.log("update data ", data);
    dispatch(updateCartItem(data));
  };

  return (
    <div className={cardClasses}>
    <div className="flex items-center mb-4">
      <img aria-hidden="true" alt="Sperm Concentration Rapid Test" src="https://boots.scene7.com/is/image/Boots/10288958?op_sharpen=1" className="mr-4 w-16"/>
      <div>
        <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">MyHealthChecked Sperm Concentration Rapid Test</h2>
        <p className={textClasses}>10330207</p>
      </div>
    </div>
    
    <div className="flex justify-between mb-2">
      <span className="text-xl font-bold text-green-600">999 points</span>
      <span className="text-red-500">Save 250 points</span>
    </div>
    <div className="flex items-center mb-4">
      <label className={labelClasses}>Quantity:</label>
      <button className={`${buttonClasses} rounded-l`}>-</button>
      <input type="number" value="1" className={`${borderClasses} w-16 text-center`} readOnly/>
      <button className={`${buttonClasses} rounded-r`}>+</button>
    </div>
    <div className="text-blue-500 mb-2">Your offers (1 applied)</div>
    <button className="text-red-500 hover:underline">Remove</button>
  </div>
  );
};

export default CartItem;

