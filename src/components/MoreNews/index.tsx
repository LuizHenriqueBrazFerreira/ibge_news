import { useContext } from 'react';
import MainContext from '../../context/main';
import './index.css';

function MoreNews() {
  const { changeLimit } = useContext(MainContext);

  const handleClick = () => {
    changeLimit();
  };

  return (
    <button onClick={ handleClick } id="more-btn">Mais notícias</button>
  );
}

export default MoreNews;
