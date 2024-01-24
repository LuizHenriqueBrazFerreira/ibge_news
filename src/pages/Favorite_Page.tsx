import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import MainContext from '../context/main';
import NewsCard from '../components/NewsCard';

function FavoritePage() {
  const { favorite } = useContext(MainContext);

  if (favorite.length === 0) return <h1>Nenhuma notícia favoritada</h1>;

  return (
    <>
      <NavLink to="/">Página Principal</NavLink>
      {favorite.map((news) => (
        <NewsCard news={ news } key={ news.id } />
      ))}
    </>
  );
}

export default FavoritePage;
