import FilterComponent from "./FilterComponent"

const Filter = () => {
    return(<div>
        <h2>Какие блюда вы предпочитаете?</h2>

        {['МОРЕПРОДУКТЫ', 'ИТАЛЬЯНСКИЕ', 'ЗАКУСКИ', 'САЛАТЫ', 'ВСЕ'].map(category => <FilterComponent category = {category}/>)
        }
        
        </div>
    )
}

export default Filter