// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.
import {useState} from 'react';
import Cabecera from './components/Cabecera';
import Listado from './components/Listado';

function App() {
  const [totalCompras, settotalCompras] = useState(0);
  
  function sumar (){
    const total = totalCompras + 1;
    settotalCompras(total);
  }

  return (
    <div className="App">
      <Cabecera compras={totalCompras}/>
      <Listado cantidades = {sumar}/>
    </div>
  );
}

export default App;
