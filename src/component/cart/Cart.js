import { useSelector } from "react-redux"
import CartItem from "./CartItem"
import { getCartItems, getTotalPrice } from "../../redux/cartSlise"

const Cart = () => {
    const cartItems = useSelector(getCartItems)
    const totalPrice = useSelector(getTotalPrice) 
    return(<div>
        <img className="cartIcon" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png" alt = 'Cart'/> 
        <h4>ОБЩАЯ СУММА: <span className="sum">{totalPrice}</span> ₽</h4> 
        {cartItems.map(cartItem => <CartItem cartItem={cartItem} /> )}
        
        </div>

    )
}

export default Cart