import TrybeLogo from '../../public/trybe-logo.webp';

function Header() {
  return (
    <header className="header-container">
      <img src={ TrybeLogo } alt="trybe_logo" className="logo-trybe" />
      <h1>
        Trybe News!
      </h1>
    </header>
  );
}

export default Header;
