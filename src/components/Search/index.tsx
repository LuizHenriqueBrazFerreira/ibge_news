import { useContext, useState } from 'react';
import MainContext from '../../context/main';
import { fetchIGBE } from '../../services/Api';
import './index.css';

function Search() {
  const { form, changeForm, changeApi } = useContext(MainContext);
  const [status, setStatus] = useState<'show' | 'hide'>('hide');
  const [inputData, setInputData] = useState('');

  const handleChange = (target: EventTarget & HTMLInputElement) => {
    const { name, value } = target;
    const newData = { filter: name, search: value };
    setInputData(value);
    changeForm(newData);
  };

  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchFetch = await fetchIGBE(form.filter, form.search);
    changeApi(searchFetch);
  };

  const changeStatus = () => {
    if (status === 'show') setStatus('hide');
    else setStatus('show');
    setInputData('');
  };

  return (
    <div className="search-container">
      <button
        className="search-btn"
        onClick={ changeStatus }
      >
        Pesquisar
      </button>
      <form onSubmit={ (event) => handleSubmit(event) }>
        <input
          type="text"
          name="search"
          value={ inputData }
          className={ `search-input ${status}` }
          onChange={ ({ target }) => handleChange(target) }
        />
      </form>
    </div>
  );
}

export default Search;
