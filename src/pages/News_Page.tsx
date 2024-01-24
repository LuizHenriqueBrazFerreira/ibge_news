import { useContext, useEffect, useState } from 'react';
import { fetchIGBE } from '../services/Api';
import MainContext from '../context/main';
import Header from '../components/Header';
import PrincipalNews from '../components/PrincipalNews';
import NavBar from '../components/NavBar';
import NewsCard from '../components/NewsCard';
import MoreNews from '../components/MoreNews';
import './index.css';

function NewsPage() {
  const { getApiFull, limit, changeLimit, api, changeApi } = useContext(MainContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchIGBE('news').then((res) => {
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
      <section>
        {api.slice(2, limit).map((news) => (
          <NewsCard news={ news } key={ news.id } />
        ))}
      </section>
      <MoreNews />
    </>
  );
}

export default NewsPage;
