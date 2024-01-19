import { useState } from 'react';
import { Link } from 'react-router-dom';
import fullHeart from '../public/checked_heart.png';
import emptyHeart from '../public/empty_heart.png';
import { NewsType } from '../types';

function NewsCard({ news }: { news: NewsType }) {
  const [favorite, setFavorite] = useState(false);

  const { introducao, titulo, link } = news;
  const { data_publicacao: dataPublicacao } = news;

  const handleclick = () => {
    setFavorite(!favorite);
  };

  return (
    <>
      <h3>{titulo}</h3>
      <h5>{introducao}</h5>
      <h6>{dataPublicacao}</h6>
      <Link to={ link }>Leia a notícia na íntegra</Link>
      <button onClick={ handleclick }>
        <img src={ favorite ? fullHeart : emptyHeart } alt="Favorite" />
      </button>
    </>
  );
}

export default NewsCard;
