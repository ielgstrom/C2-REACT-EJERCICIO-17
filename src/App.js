import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Cabecera } from "./componentes/Cabecera";
import { PaginaPrincipal } from "./paginas/PaginaPrincipal";
import { PaginaFormulario } from "./paginas/PaginaFormulario";
import { PaginaLista } from "./paginas/PaginaLista";
function App() {
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
