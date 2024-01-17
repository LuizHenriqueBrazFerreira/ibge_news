import { URL } from '../utils/constants';
import { ApiReturnType } from '../types';

const buildURL = (search = '', filter = '') => {
  switch (filter) {
    case 'news':
      return `${URL}?tipo=noticia`;
    case 'release':
      return `${URL}?tipo=release`;
    case 'search':
      return `${URL}?busca=${search}`;
    default:
      return `${URL}`;
  }
};

export const fetchIGBE = async (search?:string, filter?:string) => {
  const url = buildURL(search, filter);
  try {
    const response = await fetch(url);
    const data = await response.json() as ApiReturnType;
    return data.items;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
