import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import { useDispatch } from "react-redux";
import { ordersById, receiveProductsByPartNumber } from "../../../action";
import AddressCard from "../adreess/AdreessCard";
import OrderTracker from "./OrderTraker";

const OrderDetails = () => {
  const dispatch = useDispatch();
  const { orderId } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const address = JSON.parse(localStorage.getItem("shippingAddress"));

  // Dummy Data
  const dummyOrderDetails = {
    orderStatus: "SHIPPED",
    orderItem: [
      {
        partNumber: "123456",
        quantity: "2",
        orderItemPrice: "25.00",
        productId: "101",
      },
      {
        partNumber: "789012",
        quantity: "1",
        orderItemPrice: "50.00",
        productId: "102",
      },
    ],
  };

  const dummyProducts = [
    {
      partNumber: "123456",
      thumbnail: "https://via.placeholder.com/150",
      catalogEntryView: [{ productName: "Product 1" }],
    },
    {
      partNumber: "789012",
      thumbnail: "https://via.placeholder.com/150",
      catalogEntryView: [{ productName: "Product 2" }],
    },
  ];

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        // Fetch order details from API (simulated)
        const order = await ordersById(orderId);
        setOrderDetails(order);

        // Fetch product details for each item in the order
        const productPromises = order.orderItem.map((item) =>
          receiveProductsByPartNumber(item.partNumber)
        );
        const productResponses = await Promise.all(productPromises);
        const productsData = productResponses.map((res) => res.catalogEntryView[0]);
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching order details:", error);
        // Fallback to dummy data if there's an error
        setOrderDetails(dummyOrderDetails);
        setProducts(dummyProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  if (loading) {
    return (
      <div className="flex flex-col space-y-4 p-4">
        <Skeleton variant="rectangular" height={50} />
        <Skeleton variant="rectangular" height={200} />
        <Skeleton variant="rectangular" height={50} />
      </div>
    );
  }

  return (
    <div className="px-4 mt-6 lg:px-24 space-y-6">
      <div className="p-4 shadow-md bg-white rounded-md mt-2">
        <div className="flex justify-between items-center">
          <div className="w-full md:w-3/4">
            <OrderTracker
              activeStep={
                orderDetails?.orderStatus === "M"
                  ? 1
                  : orderDetails?.orderStatus === "CONFIRMED"
                  ? 2
                  : orderDetails?.orderStatus === "SHIPPED"
                  ? 3
                  : 5
              }
            />
          </div>
          <div>
            {orderDetails?.orderStatus === "DELIVERED" ? (
              <button className="text-red-500 border border-red-500 rounded px-4 py-2">
                Return
              </button>
            ) : (
              <button className="text-indigo-900 border border-indigo-900 rounded px-4 py-2">
                Cancel Order
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {orderDetails?.orderItem.map((item, index) => {
          const product = products.find((product) => product.partNumber === item.partNumber);
          return (
            <div key={index} className="shadow-md rounded-md p-4 border bg-white">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-2">
                  <img
                    className="w-full h-auto"
                    src={product?.thumbnail || "https://via.placeholder.com/150"}
                    alt={item.partNumber}
                  />
                </div>
                <div className="md:col-span-8">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-indigo-900">
                      {item.partNumber}
                    </h3>
                    <p className="text-gray-600">Quantity: {parseFloat(item.quantity).toFixed(0)}</p>
                    <h4 className="text-lg font-semibold text-indigo-900">
                      Price: ${parseFloat(item.orderItemPrice).toFixed(2)}
                    </h4>
                  </div>
                </div>
                <div className="md:col-span-2 text-right">
                  <button
                    className="text-indigo-900 flex items-center space-x-2"
                    onClick={() => navigate(`/account/rate/${item.productId}`)}
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.358 7.271a1 1 0 00.95.69h7.656c.969 0 1.371 1.24.588 1.81l-6.18 4.414a1 1 0 00-.364 1.118l2.357 7.271c.3.921-.755 1.688-1.54 1.118l-6.18-4.414a1 1 0 00-1.176 0l-6.18 4.414c-.784.57-1.838-.197-1.54-1.118l2.357-7.271a1 1 0 00-.364-1.118L2.204 12.7c-.783-.57-.38-1.81.588-1.81h7.656a1 1 0 00.95-.69l2.358-7.271z"
                      />
                    </svg>
                    <span className="text-sm">Rate & Review</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="p-4 shadow-md bg-white rounded-md">
        <h2 className="text-xl font-bold py-2 text-indigo-900">Shipping Address</h2>
        <AddressCard address={address} />
      </div>
    </div>
  );
};

export default OrderDetails;
