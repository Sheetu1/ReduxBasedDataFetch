import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../Redux/CartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart)

  const handleRemove = (id) => {
    dispatch(remove(id))
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-lg text-gray-500">Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Centering */}
              <div className="flex justify-center mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 object-contain rounded-lg" // Keeps image sharp and centered
                />
              </div>
              
              <h5 className="text-xl font-semibold text-gray-800 mb-2 text-center">{item.title}</h5>
              <h5 className="text-lg font-medium text-gray-600 mb-4 text-center">{item.price}</h5>
              <button
                className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Cart
