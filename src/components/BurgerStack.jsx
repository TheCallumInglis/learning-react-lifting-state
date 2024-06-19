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
                {props.ingredients.map(({ingredient, key}, index) => (
                    <Ingredient 
                        key={key}
                        index={key} 
                        ingredient={ingredient} 
                        actionIcon="X"
                        onClickAction={props.onClickAction}
                        onClickPayload={key}
                    />
                ))} 
            </ul>
        </>
        }
        </>
    )
};

export default BurgerStack;
