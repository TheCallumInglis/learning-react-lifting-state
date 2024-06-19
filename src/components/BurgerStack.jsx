import Ingredient from './Ingredient';

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
                    <Ingredient 
                        index={index} 
                        ingredient={ingredient} 
                        actionIcon="X"
                        onClickAction={props.onClickAction}
                    />
                ))} 
            </ul>
        </>
        }
        </>
    )
};

export default BurgerStack;
