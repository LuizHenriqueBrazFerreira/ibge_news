import { createContext } from 'react';
import { NewsType, SearchType } from '../types';

type MainContextType = {
  apiFull: NewsType[],
  getApiFull: (data:NewsType[]) => void,
  limit: number,
  changeLimit: (reset?:string) => void,
  form: SearchType,
  changeForm: (data:SearchType) => void,
  api: NewsType[],
  changeApi: (data:NewsType[]) => void
};

const MainContext = createContext<MainContextType>({} as MainContextType);

export default MainContext;
