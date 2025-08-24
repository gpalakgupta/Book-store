import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- import useNavigate

const CartPage = () => {
  const navigate = useNavigate(); // <-- initialize navigate

  const [cart, setCart] = useState([
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      price: 16.99,
      quantity: 1,
      image:
        "https://m.media-amazon.com/images/I/81YkqyaFVEL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      price: 18.99,
      quantity: 2,
      image:
        "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 3,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      price: 14.99,
      quantity: 1,
      image:
        "https://m.media-amazon.com/images/I/71o3P9hg9sL._AC_UF1000,1000_QL80_.jpg",
    },
  ]);

  // Update quantity
  const updateQuantity = (id, change) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculate totals
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 5;
  const total = subtotal + shipping;

  // Handle continue shopping
  const handleContinueShopping = () => {
    navigate("/books"); // <-- redirect to Featured Books page
  };

  return (
    <div className="flex flex-col md:flex-row justify-center gap-8 p-8 pt-24 bg-white">
      {/* Cart Items */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl shadow-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-10 h-28 object-cover rounded-md"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-600">by {item.author}</p>
                <p className="text-orange-600 font-semibold">${item.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="px-2 py-1 border rounded-md"
                  >
                    −
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-2 py-1 border rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                🗑
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Order Summary */}
      <div className="w-full md:w-80 p-6 mt-14 bg-orange-50 rounded-xl shadow-md  h-fit">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping</span>
          <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
        </div>
        <p className="text-sm text-gray-600 mb-2">
          🎉 Free shipping on orders over $50!
        </p>
        <hr className="my-2" />
        <div className="flex justify-between font-bold text-lg mb-4">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className="w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 mb-2">
          Proceed to Checkout
        </button>
        <button
          onClick={handleContinueShopping} // <-- added redirect here
          className="w-full py-2 border rounded-lg hover:bg-gray-100"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default CartPage;
