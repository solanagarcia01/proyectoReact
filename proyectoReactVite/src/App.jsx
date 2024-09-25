// import logo from './logo.svg';
import './App.css';
import { useEffect, useRef } from "react"; // Importamos useEffect y useRef

function App() {
  const searchInputRef = useRef(null); // Definimos la referencia

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus(); // Hacemos foco en el input cuando el componente se monta
    }
  }, []); // El array vacío asegura que useEffect se ejecute solo una vez al montar

  return (
    <div>
      {/* Colocamos el input dentro del return */}
      <input
        type="text"
        id="search"
        ref={searchInputRef}  // Usamos la referencia correcta
        placeholder="Hola"
      />
    </div>
  );
}

export default App;
