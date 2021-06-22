import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";
import { Cabecera } from "./componentes/Cabecera";
import { PaginaPrincipal } from "./paginas/PaginaPrincipal";
import { PaginaFormulario } from "./paginas/PaginaFormulario";
import { PaginaLista } from "./paginas/PaginaLista";
function App() {
  const [listaItems, setListaItems] = useState([]); //Este es el array con los diferentes objetos de la lista
  const urlApi = "http://localhost:3001/articulos"; //API de la que sacar las palabr

  const [listaArticulos, setListaArticulos] = useState([]);

  const obtenerListaArticulos = async () => {
    const resp = await fetch(urlApi);
    const resultado = await resp.json();
    setListaArticulos(resultado);
  };

  useEffect(() => obtenerListaArticulos(), []);
  console.log(listaArticulos);
  return (
    <Router>
      <Cabecera />
      <Switch>
        <Route path="/Principal" exact>
          <PaginaPrincipal />
        </Route>
        <Route path="/Formulario" exact>
          <PaginaFormulario />
        </Route>
        <Route path="/Lista" exact>
          <PaginaLista />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
