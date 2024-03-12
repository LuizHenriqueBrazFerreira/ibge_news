import TrybeLogo from '../../public/logo_trybe.png';
import './index.css';

function Header() {
  return (
    <header className="header-container">
      <img src={ TrybeLogo } alt="trybe_logo" className="logo-trybe" />
      <h1>TRYBE NEWS</h1>
    </header>
  );
}

export default Header;
