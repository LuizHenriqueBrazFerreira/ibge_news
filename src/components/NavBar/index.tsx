import { NavLink } from 'react-router-dom';
import './index.css';

function NavBar() {
  return (
    <div className="navbar-container">
      <NavLink to="/" data-testid="main_page-btn" className="link">Mais recentes</NavLink>
      <NavLink to="/release" data-testid="release-btn" className="link">Release</NavLink>
      <NavLink to="/noticia" data-testid="news-btn" className="link">Notícia</NavLink>
      <NavLink
        to="/favorites"
        data-testid="favorite-btn"
        className="link"
      >
        Favoritas
      </NavLink>
    </div>
  );
}

export default NavBar;
