import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <NavLink to="/">Mais recentes</NavLink>
      <NavLink to="/release">Release</NavLink>
      <NavLink to="/noticia">Notícia</NavLink>
      <NavLink to="/favorites">Favoritas</NavLink>
    </>
  );
}

export default NavBar;
