import { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import NewsCard from '../components/NewsCard';
import MainContext from '../context/main';
import { fetchIGBE } from '../services/Api';
import PrincipalNews from '../components/PrincipalNews';
import MoreNews from '../components/MoreNews';
import NavBar from '../components/NavBar';
import Search from '../components/Search';
import './index.css';

function MainPage() {
  const { getApiFull, limit, changeLimit, api, changeApi } = useContext(MainContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchIGBE().then((res) => {
      getApiFull(res);
      changeApi(res);
      changeLimit('reset');
      setLoading(false);
    });
  }, []);

  if (loading === true) return <h1>Loading</h1>;

  return (
    <>
      <Header />
      <PrincipalNews />
      <NavBar />
      <Search />
      <section>
        {api.slice(2, limit).map((news) => (
          <NewsCard news={ news } key={ news.id } />
        ))}
      </section>
      <MoreNews />
    </>
  );
}

export default MainPage;
