import { vi } from 'vitest';
import { screen } from '@testing-library/react';
import { apiNewsMock } from '../mocks/apiNewsMock';
import renderWithRouter from '../utils/RenderWithRouter';
import App from '../App';

describe('Verifica se a página Notícias é renderizada corretamente', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const apiNewsResponse = {
    ok: true,
    json: async () => apiNewsMock,
  } as Response;

  test('Verifica se a página de Notícias é renderizado com a notícia principal', () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce(apiNewsResponse);

    renderWithRouter(<App />, { route: '/noticias' });

    const principalNews = screen.getByRole('heading', { level: 3 });

    expect(principalNews).toHaveTextContent(/IBGE oferece 895 vagas no Concurso Público Nacional Unificado/i);
  });

  test('Verifica se a página Notícias possui 9 cards de notícias', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce(apiNewsResponse);

    renderWithRouter(<App />, { route: '/noticias' });
    const newsCards = await screen.findAllByTestId('news-card');

    expect(newsCards).toHaveLength(9);
  });

  test('Verifica se ao clicar em Mais Notícias, passa a ter 18 cards', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce(apiNewsResponse);

    const { user } = renderWithRouter(<App />, { route: '/noticias' });

    const moreNews = screen.getByTestId('more-news');
    const newsCards = await screen.findAllByTestId('news-card');

    expect(newsCards).toHaveLength(9);

    await user.click(moreNews);

    expect(newsCards).toHaveLength(18);
  });
});
