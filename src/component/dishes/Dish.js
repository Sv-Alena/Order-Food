const Dish = ({dish}) => {
    return(
        <div>
            <img src={`./${dish.img}.jpg`} alt='dishes'/>
            <h2>{dish.name}</h2>
            <p>{dish.price} ₽</p>
            
        </div>
    )
}

export default Dish