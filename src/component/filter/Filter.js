import FilterComponent from "./FilterComponent"

const Filter = () => {
    return(<div>
        <h2>Какие блюда вы предпочитаете?</h2>
<span className="filter">{['МОРЕПРОДУКТЫ', 'ИТАЛЬЯНСКИЕ', 'ЗАКУСКИ', 'САЛАТЫ', 'ВСЕ'].map(category => <FilterComponent category = {category}/>)
        }
        </span>
        
        </div>
    )
}

export default Filter