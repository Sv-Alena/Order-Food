import { useDispatch, useSelector } from "react-redux"
import { filterCadegory, getSelectedCategory } from "../../redux/dishesSlise"

const FilterComponent = ({category}) => {
    const dispatch = useDispatch()
    const selectedCategory = useSelector(getSelectedCategory)
    return(<div>
        <p onClick={()=> {dispatch(filterCadegory(category))}} className={selectedCategory === category ? 'categoryButtonSelected categoryButton' : 'categoryButton'}>{category}</p>
    </div>
    )
}

export default FilterComponent