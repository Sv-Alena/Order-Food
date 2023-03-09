const Dish = ({dish}) => {
    return(
        <div>
            <img src={`./${dish.img}.jpg`} alt='dishes'/>
            <h3>{dish.name}</h3>
            <p>{dish.price} ₽</p>
            <button>+-</button>
            <button>В КОРЗИНУ</button>
        </div>
    )
}

export default Dish