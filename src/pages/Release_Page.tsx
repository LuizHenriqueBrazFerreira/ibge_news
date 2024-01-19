import { useContext, useEffect } from 'react';
import { fetchIGBE } from '../services/Api';
import MainContext from '../context/main';
import Header from '../components/Header';
import PrincipalNews from '../components/PrincipalNews';
import NavBar from '../components/NavBar';
import NewsCard from '../components/NewsCard';
import MoreNews from '../components/MoreNews';

function ReleasePage() {
  const { getApiFull, limit, changeLimit, api, changeApi } = useContext(MainContext);

  useEffect(() => {
    const getApi = async () => {
      changeLimit('reset');
      const data = await fetchIGBE('release');
      getApiFull(data);
      changeApi(data);
    };
    getApi();
  }, []);

  if (api.length === 0) return <h1>Loading</h1>;
  return (
    <>
      <Header />
      <PrincipalNews />
      <NavBar />
      {api.slice(2, limit).map((news) => (
        <NewsCard news={ news } key={ news.id } />
      ))}
      <MoreNews />
    </>
  );
}

export default ReleasePage;
