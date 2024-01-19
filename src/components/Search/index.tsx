import { useContext } from 'react';
import MainContext from '../../context/main';
import { fetchIGBE } from '../../services/Api';

function Search() {
  const { form, changeForm, changeApi } = useContext(MainContext);

  const handleChange = (target: EventTarget & HTMLInputElement) => {
    const { name, value } = target;
    const newData = { filter: name, search: value };

    changeForm(newData);
  };

  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchFetch = await fetchIGBE(form.filter, form.search);
    changeApi(searchFetch);
  };

  return (
    <>
      <button className="search-btn">Pesquisar</button>
      <form onSubmit={ (event) => handleSubmit(event) }>
        <input
          type="text"
          name="search"
          className="search-input"
          onChange={ ({ target }) => handleChange(target) }
        />
      </form>
    </>
  );
}

export default Search;
