import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import MainContext from '../../context/main';
import { convertImgPath } from '../../utils/convertImagePath';
import fullHeart from '../../public/checked_heart.png';
import emptyHeart from '../../public/empty_heart.png';
import { calculateDays } from '../../utils/calculateDays';
import './index.css';

function PrincipalNews() {
  const { apiFull, changeFavorite, favorite } = useContext(MainContext);

  const [favorites, setFavorites] = useState(false);

  const { id, introducao, titulo, imagens, link } = apiFull[0];
  const dataPublicacao = apiFull[0].data_publicacao;

  const daysCount = calculateDays(dataPublicacao);

  const pathImage = convertImgPath(imagens);

  const handleclick = () => {
    setFavorites(!favorites);
    changeFavorite(apiFull[0], favorites);
  };

  return (
    <div id="principal-container">
      <img src={ `http://agenciadenoticias.ibge.gov.br/${pathImage}` } alt={ `${id}` } className="image-news" />
      <div className="news-info">
        <h5 id="recent-news">Notícia mais recente</h5>
        <h3 className="title-principal">{titulo}</h3>
        <h5 className="introduction">{introducao}</h5>
        {(daysCount === 0) && <h6>Publicado hoje</h6> }
        {(daysCount === 1) && <h6>{`${daysCount} dia atrás`}</h6>}
        {(daysCount > 1) && <h6>{`${daysCount} dias atrás`}</h6>}
        <Link to={ link } id="full-news">Leia a notícia na íntegra</Link>
        <button onClick={ handleclick }>
          <img
            src={ favorite.some((data) => data.id === apiFull[0].id)
              ? fullHeart : emptyHeart }
            alt="Favorite"
            id="favorite-btn"
          />
        </button>
      </div>
    </div>
  );
}

export default PrincipalNews;
