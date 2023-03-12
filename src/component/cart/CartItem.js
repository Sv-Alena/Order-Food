import dataDishes from "../../data/dataDishes"
import { removeItemFromCart } from "../../redux/cartSlise"
import { useDispatch } from "react-redux"

const CartItem = ({cartItem}) => {
    const dishes = dataDishes.find(item => item.id === cartItem.dishId)
    const dispatch = useDispatch()
    return(<div>
        <p>{dishes.name}</p>
        <p>кол-во порций {cartItem.quantity} </p>  
        <p>Цена: {dishes.price * cartItem.quantity} ₽</p>  
        <spen onClick={() => {dispatch(removeItemFromCart({cartItemId: cartItem.id}))}}>
        <img  className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt='delet'/>
        </spen>
 </div>
        
    )
}

export default CartItem