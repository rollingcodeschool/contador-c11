import "bootstrap/dist/css/bootstrap.min.css";
import Informacion from "./components/Informacion";

function App() {
  //aqui va la logica del componente
  const comision = 'c11'

  return (
    // aqui puedo agregar algo de logica
    <main className="container my-5">
      {/* Aqui va todo el maquetado html */}
      <h1>Hola mundo 2</h1>
      <Informacion comisionProps={comision} anio={2025}/>
    </main>
  );
}

export default App;
