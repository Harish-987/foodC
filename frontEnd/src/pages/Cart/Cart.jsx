import React, { useContext } from 'react'
import '../Cart/Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const { cartItems, food_list, removeFromCart,getTotalCartAmount,url,token } = useContext(StoreContext);
    
    const navigate = useNavigate();

    return (
        <div className='cart'>
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {
                    food_list.map((item) => {
                        if (cartItems[item._id] > 0) {
                            return (
                                <div key={item._id}>
                                    <div className='cart-items-title cart-items-item'>
                                        <img src={url+"/images/"+item.image} alt="" />
                                        <p>{item.name}</p>
                                        <p>${item.price}</p>
                                        <p>{cartItems[item._id]}</p>
                                        <p>${item.price * cartItems[item._id]}</p>
                                        <p onClick={() => removeFromCart(item._id)} className='cross'><button>x</button></p>
                                    </div>
                                    <hr />
                                </div>
                            )
                        }
                    })
                }
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Total</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>${ getTotalCartAmount() === 0 ? 0 : 2}</p>
                        </div>
                        <div className="cart-total-details">
                            <p>Total</p>
                            <p>${ getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
                        </div>
                    </div>
                    <button onClick={ () => {
                        if(!token){
                            alert("please login");
                            return;
                        }
                        if(getTotalCartAmount === 0){
                            alert("cart is empty,add items to cart");
                            return;
                        }
                        navigate('/order');
                    } } >PROCEED TO CHECKOUT</button>
                </div>
                <div className="cart-promocode">
                    <p>If you have a promo code,Enter it here</p>
                    <div className="cart-promocode-input">
                        <input type="text" placeholder='promocode' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
