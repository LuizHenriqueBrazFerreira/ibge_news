import { useState } from 'react';
import MainContext from './main';
import { NewsType, SearchType } from '../types';

function MainProvider({ children }: { children: React.ReactNode }) {
  const [apiFull, setApiFull] = useState<NewsType[]>([] as NewsType[]);
  const [limit, setLimit] = useState(11);
  const [form, setForm] = useState<SearchType>({} as SearchType);
  const [api, setApi] = useState<NewsType[]>([]);
  const [favorite, setFavorite] = useState<NewsType[]>([]);

  const getApiFull = (data:NewsType[]) => {
    setApiFull(data);
  };

  const changeLimit = (reset?:string) => {
    if (reset === 'reset') setLimit(11);
    else setLimit((prevState) => prevState + 9);
  };

  const changeForm = (data:SearchType) => {
    setForm(data);
  };

  const changeApi = (data:NewsType[]) => {
    setApi(data);
  };

  const changeFavorite = (data:NewsType, isDelete = false) => {
    const newFavorites = isDelete
      ? favorite.filter((news) => news.id !== data.id)
      : [...favorite, data];
    setFavorite(newFavorites);
  };

  return (
    <MainContext.Provider
      value={ {
        apiFull,
        getApiFull,
        limit,
        changeLimit,
        form,
        changeForm,
        api,
        changeApi,
        favorite,
        changeFavorite,
      } }
    >
      {children}
    </MainContext.Provider>
  );
}

export default MainProvider;
