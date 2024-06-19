const IngredientList = (props) => {
    return (
        <>
        <h2>Ingredients</h2>
        <ul>
            {props.ingredients.map((ingredient, index) => (
                <li 
                    key={index} 
                    style={{ backgroundColor: ingredient.color }}
                >
                    {ingredient.name}
                    <button type="button" onClick={() => props.onClickAction(ingredient)}>+</button>
                </li>
            ))} 
        </ul>
        </>
    )
    
};

export default IngredientList;
