import { vi } from 'vitest';
import { screen } from '@testing-library/react';
import { apiNewsMock } from '../mocks/apiNewsMock';
import renderWithRouter from '../utils/RenderWithRouter';
import App from '../App';
import fullHeart from '../public/checked_heart.png';

describe('Verifica se a página Notícias é renderizada corretamente', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const apiNewsResponse = {
    ok: true,
    json: async () => apiNewsMock,
  } as Response;

  test('Verifica se a página de Notícias é renderizado com a notícia principal', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce(apiNewsResponse);

    renderWithRouter(<App />);

    const principalNews = await screen.findByRole('heading', { level: 3 });

    expect(principalNews).toHaveTextContent(/Favelas e Comunidades Urbanas:.../i);
  });

  test('Verifica se a página Notícias possui 9 cards de notícias', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce(apiNewsResponse);

    renderWithRouter(<App />);
    const newsCards = await screen.findAllByTestId('news-card');

    expect(newsCards).toHaveLength(9);
  });

  test('Verifica se ao clicar em Mais Notícias, passa a ter 18 cards', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce(apiNewsResponse);

    const { user } = renderWithRouter(<App />);

    const favoriteButton = await screen.findAllByTestId('favorite-button');

    const newsCards = await screen.findAllByTestId('news-card');

    expect(newsCards).toHaveLength(9);

    await user.click(favoriteButton[0]);

    const favoriteBtn = await screen.findAllByTestId('favorite-button') as HTMLImageElement[];

    expect(favoriteBtn[0].src.split('3000')[1]).toEqual(fullHeart);
  });
});
