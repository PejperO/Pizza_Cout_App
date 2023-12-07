import React, {useEffect, useState} from 'react';
import './App.css';

const PizzaList = ({ pizzas, onDelete }) => {
  return (
      <ul>
        {pizzas.map((pizza, index) => (
            <PizzaItem key={index} pizza={pizza} onDelete={() => onDelete(index)} />
        ))}
      </ul>
  );
};

const PizzaItem = ({ pizza, onDelete }) => {
    return (
        <li>
            <div>
                <span>Name: {pizza.name}</span>
                <span>Size: {pizza.size}</span>
                <span>Price: {pizza.price}</span>
            </div>
            <button onClick={onDelete}>Delete</button>
        </li>
    );
};

const AddPizzaForm = ({ onAdd, onInputChange, inputError }) => {
  return (
      <div>
        <label>Name:</label>
        <input type="text" name="name" onChange={onInputChange} />
        <br />
        <label>Size:</label>
        <input type="text" name="size" onChange={onInputChange} />
        <br />
        <label>Price:</label>
        <input type="number" name="price" onChange={onInputChange} />
        <br />
        <button onClick={onAdd}>ADD</button>
        {inputError && <p style={{ color: 'red' }}>The name must contain at least 3 characters!</p>}
      </div>
  );
};

function App() {
    const [pizzas, setPizzas] = useState([]);
    const [newPizza, setNewPizza] = useState({ name: '', size: '', price: '' });
    const [inputError, setInputError] = useState(false);
    const [cheapestPizza, setCheapestPizza] = useState(null);

    const handleAddPizza = () => {
        if (newPizza.name.length >= 3) {
            setPizzas([...pizzas, newPizza]);
            setNewPizza({ name: '', size: '', price: '' });
            setInputError(false);
        } else {
            setInputError(true);
        }
    };

    const handleDeletePizza = (index) => {
        const newPizzas = [...pizzas];
        newPizzas.splice(index, 1);
        setPizzas(newPizzas);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPizza((prevPizza) => ({ ...prevPizza, [name]: value }));
    };

    const handleCalculateCheapest = () => {
        if (pizzas.length > 0) {
            const cheapestPizza = pizzas.reduce((prev, current) => {
                const currentRatio = current.size / current.price;
                const prevRatio = prev.size / prev.price;
                return currentRatio > prevRatio ? current : prev;
            });

            setCheapestPizza(cheapestPizza);
        } else {
            setCheapestPizza(null);
        }
    };

    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRotation((prevRotation) => prevRotation + 1);
        }, 10);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="App">
            <div className="rotating-image-container">
                <img
                    src={`${process.env.PUBLIC_URL}/pizza.png`}
                    alt="Pizza"
                    style={{ transform: `rotate(${rotation}deg)` }}
                />
            </div>
            <h1>Pizza App</h1>
            <AddPizzaForm
                onAdd={handleAddPizza}
                onInputChange={handleInputChange}
                inputError={inputError}
            />
            <PizzaList pizzas={pizzas} onDelete={handleDeletePizza} />
            <button onClick={handleCalculateCheapest}>Count</button>
            {cheapestPizza && (
                <div>
                    <h2>Cheapest Pizza:</h2>
                    <p>Name: {cheapestPizza.name}</p>
                    <p>Size: {cheapestPizza.size}</p>
                    <p>Price: {cheapestPizza.price}</p>
                </div>
            )}
        </div>
    );
}

export default App;