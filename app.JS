//import logo from './logo.svg';
import './App.css';
import Saludos from './components/Saludos'
import Ejercicio from './components/Ejercicio1'
import Tareas from './components/Tareas';

function App() {
  return (
    <div className="App">
      <h1>Primeros pasos en React</h1>
      <h2>Bienvenidos</h2>
      <Saludos nombre ="Milexy" apellido ="Milexy" />
      <Ejercicio nombre= "Milexy" edad = "19" pasatiempo= "escuchar musica"/>
      <h2>Tareas cotidianas</h2>
      <Tareas/>
    </div>
  );
}

export default App;
