import { useEffect, useRef } from "react"; // Asegúrate de importar lo que necesitas
import './App.css';
import ItemCount from './ItemCount'; // Importa el componente que creaste

function App() {
  const stockDisponible = 10; // Simulamos el stock disponible
  const onAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} items al carrito`);
  };

  return (
    <div>
      <h1>Tienda</h1>
      <ItemCount stock={stockDisponible} initial={1} onAdd={onAdd} />
    </div>
  );
}

export default App;