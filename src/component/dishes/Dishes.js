import dataDishes from "../../data/dataDishes";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/dishesSlise";
import Dish from "./Dish";

const Dishes = () => {
    const selectedCategory = useSelector(getSelectedCategory)
    return( <div>
            {dataDishes
            .filter(dish => {
                if (selectedCategory === 'ВСЕ') return true;
                return selectedCategory === dish.category;
            })
            .map(dish => <Dish dish={dish} />)}
        </div>
    )
}

export default Dishes