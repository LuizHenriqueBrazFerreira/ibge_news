import { Route, Routes } from 'react-router-dom';
import MainProvider from './context/mainProvider';
import MainPage from './pages/Main_Page';
import NewsPage from './pages/News_Page';
import ReleasePage from './pages/Release_Page';
import FavoritePage from './pages/Favorite_Page';

function App() {
  return (
    <MainProvider>
      <Routes>
        <Route path="/" element={ <MainPage /> } />
        <Route path="/noticia" element={ <NewsPage /> } />
        <Route path="/release" element={ <ReleasePage /> } />
        <Route path="/favorites" element={ <FavoritePage /> } />
      </Routes>
    </MainProvider>
  );
}

export default App;
