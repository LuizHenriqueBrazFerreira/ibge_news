import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <NavLink to="/" data-testid="main_page-btn">Mais recentes</NavLink>
      <NavLink to="/release" data-testid="release-btn">Release</NavLink>
      <NavLink to="/noticia" data-testid="news-btn">Notícia</NavLink>
      <NavLink to="/favorites" data-testid="favorite-btn">Favoritas</NavLink>
    </>
  );
}

export default NavBar;
