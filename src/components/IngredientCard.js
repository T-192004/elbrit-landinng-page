import '../styles/IngredientsSection.css'

const IngredientCard = props => {
    const {ingredient, index} = props
    return (
        <div key={index} className="ingredient-card">
            <img src={ingredient.image} alt={ingredient.name} />
            <div className='card-content'>
                <h4>{ingredient.name}</h4>
                <p>{ingredient.description}</p>
                <button>See More</button>
            </div>
        </div>
    )
}

export default IngredientCard