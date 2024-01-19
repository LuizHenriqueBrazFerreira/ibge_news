import { useContext } from 'react';
import { Link } from 'react-router-dom';
import MainContext from '../context/main';
import { convertImgPath } from '../utils/convertImagePath';

function PrincipalNews() {
  const { apiFull } = useContext(MainContext);

  const { id, introducao, titulo, imagens, link } = apiFull[0];
  const dataPublicacao = apiFull[0].data_publicacao;

  const pathImage = convertImgPath(imagens);

  return (
    <>
      <h3>{titulo}</h3>
      <h5>{introducao}</h5>
      <h6>{dataPublicacao}</h6>
      <img src={ `http://agenciadenoticias.ibge.gov.br/${pathImage}` } alt={ `${id}` } />
      <Link to={ link }>Leia a notícia na íntegra</Link>
    </>
  );
}

export default PrincipalNews;
