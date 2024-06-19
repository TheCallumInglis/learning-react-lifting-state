// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
    return (
        <>
        {props.ingredients.length === 0 
        ? <h2>No Ingredients</h2> 
        : 
        <>
            <h2>Your Burger</h2>
            <ul>
                {props.ingredients.map((ingredient, index) => (
                    <li 
                        key={index} 
                        style={{ backgroundColor: ingredient.color }}
                    >
                        {ingredient.name}
                        <button type="button" onClick={() => props.onClickAction(ingredient)}>X</button>
                    </li>
                ))} 
            </ul>
        </>
        }
        </>
    )
};

export default BurgerStack;
