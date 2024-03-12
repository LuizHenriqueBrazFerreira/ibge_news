import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import fullHeart from '../../public/checked_heart.png';
import emptyHeart from '../../public/empty_heart.png';
import { NewsType } from '../../types';
import MainContext from '../../context/main';
import { calculateDays } from '../../utils/calculateDays';
import './index.css';

function NewsCard({ news }: { news: NewsType }) {
  const { favorite, changeFavorite } = useContext(MainContext);

  const favoriteState = favorite.some((data) => data.id === news.id);

  const [favorites, setFavorites] = useState(favoriteState);

  const { introducao, titulo, link } = news;
  const { data_publicacao: dataPublicacao } = news;

  const daysCount = calculateDays(dataPublicacao);

  const handleclick = () => {
    setFavorites(!favorites);
    changeFavorite(news, favorites);
  };

  return (
    <div className="news-container" data-testid="news-card">
      <h4 className="title-card">{titulo}</h4>
      <h5 className="introduction-card">{introducao}</h5>
      {(daysCount === 0) && <h6>Publicado hoje</h6> }
      {(daysCount === 1) && <h6>{`${daysCount} dia atrás`}</h6>}
      {(daysCount > 1) && <h6>{`${daysCount} dias atrás`}</h6>}
      <Link to={ link } className="full-news">Leia a notícia na íntegra</Link>
      <button onClick={ handleclick }>
        <img
          src={ favoriteState ? fullHeart : emptyHeart }
          alt="Favorite"
          id="favorite-btn"
          data-testid="favorite-button"
        />
      </button>
    </div>
  );
}

export default NewsCard;
