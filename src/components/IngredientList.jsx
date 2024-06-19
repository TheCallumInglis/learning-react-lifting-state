import Ingredient from './Ingredient';

const IngredientList = (props) => {
    return (
        <>
        <h2>Ingredients</h2>
        <ul>
            {props.ingredients.map((ingredient, index) => (
                <Ingredient 
                    index={index} 
                    ingredient={ingredient} 
                    actionIcon="+"
                    onClickAction={props.onClickAction}
                />
            ))} 
        </ul>
        </>
    )
    
};

export default IngredientList;
