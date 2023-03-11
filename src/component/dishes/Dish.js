import { useState } from "react"
import { useDispatch } from "react-redux"
import { addItemsToCart } from "../../redux/cartSlise"
import ChangeQuantity from "../cart/ChangeQuantity"

const Dish = ({dish}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch
    return(
        <div>
            <img src={`./${dish.img}.jpg`} alt='dishes'/>
            <h3>{dish.name}</h3>
            <p>{dish.price} ₽</p>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
            <button onClick={() => {dispatch(addItemsToCart({dish, quantity}))}}>В КОРЗИНУ</button>
        </div>
    )
}

export default Dish