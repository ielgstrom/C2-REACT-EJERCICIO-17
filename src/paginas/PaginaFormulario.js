export const PaginaFormulario = () => {
  return (
    <form className="form-crear">
      <label for="nombre">Nombre:</label>
      <input className="control" type="text" id="nombre" />
      <label for="precio">Precio:</label>
      <div className="control-moneda">
        <input className="control" type="number" id="precio" /> €
      </div>
      <button className="enviar" type="submit">
        Modificar
      </button>
    </form>
  );
};
