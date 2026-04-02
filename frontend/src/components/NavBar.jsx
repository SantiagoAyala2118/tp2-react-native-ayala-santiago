const NavBar = () => {
  return (
    <header className="mx-10 flex justify-end  w-100%">
      <div className="flex justify-between">
        <img src="" alt="" />
        <ul className="grid grid-cols-4">
          <li>
            <a href="http://">Inicio</a>
          </li>
          <li>
            <a href="http://">Crear</a>
          </li>
          <li>
            <a href="http://">Actualizar</a>
          </li>
          <li>
            <a href="http://">Eliminar</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
