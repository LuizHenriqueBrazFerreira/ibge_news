import { useContext, useEffect } from 'react';
import Header from '../components/Header';
import NewsCard from '../components/NewsCard';
import MainContext from '../context/main';
import { fetchIGBE } from '../services/Api';
import PrincipalNews from '../components/PrincipalNews';
import MoreNews from '../components/MoreNews';
import NavBar from '../components/NavBar';
import Search from '../components/Search';

function MainPage() {
  const { getApiFull, limit, changeLimit, api, changeApi } = useContext(MainContext);

  useEffect(() => {
    const getApi = async () => {
      changeLimit('reset');
      const data = await fetchIGBE();
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
      <Search />
      {api.slice(2, limit).map((news) => (
        <NewsCard news={ news } key={ news.id } />
      ))}
      <MoreNews />
    </>
  );
}

export default MainPage;
