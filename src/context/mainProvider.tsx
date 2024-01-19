import { useState } from 'react';
import MainContext from './main';
import { NewsType, SearchType } from '../types';

function MainProvider({ children }: { children: React.ReactNode }) {
  const [apiFull, setApiFull] = useState<NewsType[]>([] as NewsType[]);
  const [limit, setLimit] = useState(11);
  const [form, setForm] = useState<SearchType>({} as SearchType);
  const [api, setApi] = useState<NewsType[]>([]);

  const getApiFull = (data:NewsType[]) => {
    setApiFull(data);
  };

  const changeLimit = (reset?:string) => {
    if (typeof reset === 'string') setLimit(11);
    setLimit((prevState) => prevState + 9);
  };

  const changeForm = (data:SearchType) => {
    setForm(data);
  };

  const changeApi = (data:NewsType[]) => {
    setApi(data);
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
      } }
    >
      {children}
    </MainContext.Provider>
  );
}

export default MainProvider;
