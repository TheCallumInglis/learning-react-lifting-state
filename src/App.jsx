import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import IngredientList from './components/IngredientList';
import BurgerStack from './components/BurgerStack';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];


const App = () => {
  const [stack, setStack] = useState([]);

  const addToBurger = (ingredient) => {
    const key = uuidv4();
    setStack([{ingredient: ingredient, key: key}, ...stack]);
  }

  const removeFromBurger = (key) => {
    setStack(stack.filter((item) => item.key !== key));
  }

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList ingredients={availableIngredients} onClickAction={addToBurger}/>
        <BurgerStack ingredients={stack} onClickAction={removeFromBurger}/>
      </section>
    </main>
  );
};

export default App;
