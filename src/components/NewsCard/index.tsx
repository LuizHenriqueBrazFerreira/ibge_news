import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import fullHeart from '../../public/checked_heart.png';
import emptyHeart from '../../public/empty_heart.png';
import { NewsType } from '../../types';
import MainContext from '../../context/main';
import { calculateDays } from '../../utils/calculateDays';

function NewsCard({ news }: { news: NewsType }) {
  const { favorite, changeFavorite } = useContext(MainContext);

  const [favorites, setFavorites] = useState(false);

  const { introducao, titulo, link } = news;
  const { data_publicacao: dataPublicacao } = news;

  const daysCount = calculateDays(dataPublicacao);

  const handleclick = () => {
    setFavorites(!favorites);
    changeFavorite(news, favorites);
  };

  return (
    <div>
      <h3>{titulo}</h3>
      <h5>{introducao}</h5>
      {(daysCount === 0) && <h6>Publicado hoje</h6> }
      {(daysCount === 1) && <h6>{`${daysCount} dia atrás`}</h6>}
      {(daysCount > 1) && <h6>{`${daysCount} dias atrás`}</h6>}
      <Link to={ link }>Leia a notícia na íntegra</Link>
      <button onClick={ handleclick }>
        <img
          src={ favorite.some((data) => data.id === news.id)
            ? fullHeart : emptyHeart }
          alt="Favorite"
        />
      </button>
    </div>
  );
}

export default NewsCard;