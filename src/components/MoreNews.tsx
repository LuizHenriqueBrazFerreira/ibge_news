import { useContext } from 'react';
import MainContext from '../context/main';

function MoreNews() {
  const { changeLimit } = useContext(MainContext);

  const handleClick = () => {
    changeLimit();
  };

  return (
    <button onClick={ handleClick }>More News</button>
  );
}

export default MoreNews;
