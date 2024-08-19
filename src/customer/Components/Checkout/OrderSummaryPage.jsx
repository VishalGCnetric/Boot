import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCartItems, ShipingInfoOrder } from '../../../action/cart';

const OrderSummaryPage = () => {
  const navigate = useNavigate()
  const address = JSON.parse(localStorage.getItem('deliveryAddress'));
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cartItems.cartItems);

 

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);
  

  const handleNewOrder = () => {
    if(cart.orderId&&address.addressId){
      let shiping={
        orderItemId: cart?.orderId,
        addressId: address.addressId
    }
    
    ShipingInfoOrder(shiping).then((res) => {
      navigate('/checkout?step=3')
      alert('Proceed for payment')
    });
   
  }
  }


  return (
    <div className="p-4 max-w-7xl mx-auto ">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Side - Chosen Address */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
          <div className="text-gray-700 rounded-lg shadow-xl p-6">
            <p>{`${address?.firstName} ${address?.lastName}`}</p>
            <p>{address?.addressLine[0]}</p>
            <p>{address?.addressLine[1]}</p>
            {address?.addressLine[2] && <p>{address?.addressLine[2]}</p>}
            <p>{`${address?.city}, ${address?.state}, ${address?.zipCode}`}</p>
            {/* Assuming "India" as country if not provided in the address object */}
            <p>{address?.country || "India"}</p>
            <p>{`Phone: ${address?.phone1}`}</p>
            <p>{`Nickname: ${address?.nickName}`}</p>
            <p>{`Address Type: ${address?.addressType}`}</p>
          </div>
        </div>

        {/* Right Side - Order Details */}
        <div className="w-full lg:w-1/3 p-6 rounded-lg shadow-xl">
          <div className="bg-white p-4 ">
            <button onClick={handleNewOrder} className="bg-wwwbootscom-congress-blue hover:bg-btn-hover text-white py-2 px-4 rounded-md w-full mb-4">
              Proceed to Payment
            </button>
            <div className="border-t pt-4">
              <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
              <p>Items: --</p>
              <p>Delivery: --</p>
              <p className="text-lg font-bold text-red-600 mt-4">Order Total: ₹{cart?.grandTotal}</p>
            </div>
            <a href="#" className="text-blue-600 text-sm mt-4 inline-block">
              How are delivery costs calculated?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryPage;
