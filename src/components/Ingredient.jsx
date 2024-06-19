const Ingredient = (props) => {
    return (
        <li 
            key={props.index} 
            style={{ backgroundColor: props.ingredient.color }}
        >
            {props.ingredient.name}
            <button 
                type="button" 
                onClick={() => props.onClickAction(props.onClickPayload)}
            >
                {props.actionIcon}
            </button>
        </li>
    )
};

export default Ingredient;