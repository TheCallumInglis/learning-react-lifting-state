import Ingredient from './Ingredient';

const IngredientList = (props) => {
    return (
        <>
        <h2>Ingredients</h2>
        <ul>
            {props.ingredients.map((ingredient, index) => (
                <Ingredient 
                    key={index}
                    index={index} 
                    ingredient={ingredient} 
                    actionIcon="+"
                    onClickAction={props.onClickAction}
                    onClickPayload={ingredient}
                />
            ))} 
        </ul>
        </>
    )
    
};

export default IngredientList;
