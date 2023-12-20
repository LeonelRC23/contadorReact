import "bootstrap/dist/css/bootstrap.min.css";
import TituloSecundario from "./components/TituloSecundario";

function App() {
  //Aqui agregamos toda la logica que necesite el componente
  const anioActual = 2023;
  return (
    //Aqui puedo agregar un poco de logica
    <>
      <section className="container my-4">
        <h1 className="display-3 text-center">Contador con React</h1>
        <TituloSecundario comision = "c73i" anioActualProps = {anioActual}/>
      </section>
    </>
  );
}

export default App;
