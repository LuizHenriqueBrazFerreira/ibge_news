import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import MainContext from '../context/main';
import { convertImgPath } from '../utils/convertImagePath';
import fullHeart from '../public/checked_heart.png';
import emptyHeart from '../public/empty_heart.png';

function PrincipalNews() {
  const { apiFull, changeFavorite, favorite } = useContext(MainContext);

  const [favorites, setFavorites] = useState(false);

  const { id, introducao, titulo, imagens, link } = apiFull[0];
  const dataPublicacao = apiFull[0].data_publicacao;

  const pathImage = convertImgPath(imagens);

  const handleclick = () => {
    setFavorites(!favorites);
    changeFavorite(apiFull[0], favorites);
    console.log(favorite);
  };

  return (
    <>
      <h3>{titulo}</h3>
      <h5>{introducao}</h5>
      <h6>{dataPublicacao}</h6>
      <img src={ `http://agenciadenoticias.ibge.gov.br/${pathImage}` } alt={ `${id}` } />
      <Link to={ link }>Leia a notícia na íntegra</Link>
      <button onClick={ handleclick }>
        <img
          src={ favorite.some((data) => data.id === apiFull[0].id)
            ? fullHeart : emptyHeart }
          alt="Favorite"
        />
      </button>
    </>
  );
}

export default PrincipalNews;
