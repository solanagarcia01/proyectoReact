import { useState } from 'react';

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    if (stock > 0) {
      onAdd(count);
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleDecrement} disabled={count <= 1}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrement} disabled={count >= stock}>+</button>
      </div>
      <button onClick={handleAdd} disabled={stock <= 0}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
