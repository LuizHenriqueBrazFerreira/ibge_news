import { vi } from 'vitest';
import { screen } from '@testing-library/react';
import { apiReleaseMock } from '../mocks/apiReleaseMock';
import renderWithRouter from '../utils/RenderWithRouter';
import App from '../App';

describe('Verifica se a página Releases é renderizada corretamente', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const apiReleaseResponse = {
    ok: true,
    json: async () => apiReleaseMock,
  } as Response;

  test('Verifica se a página de Releases é renderizado com a notícia principal', () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce(apiReleaseResponse);

    renderWithRouter(<App />, { route: '/noticias' });

    const principalNews = screen.getByRole('heading', { level: 3 });

    expect(principalNews).toHaveTextContent(/Volume dos Serviços varia 0,4% em novembro/i);
  });

  test('Verifica se a página Releases possui 9 cards de notícias', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce(apiReleaseResponse);

    renderWithRouter(<App />, { route: '/noticias' });
    const newsCards = await screen.findAllByTestId('news-card');

    expect(newsCards).toHaveLength(9);
  });

  test('Verifica se ao clicar em Mais Releases, passa a ter 18 cards', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce(apiReleaseResponse);

    const { user } = renderWithRouter(<App />, { route: '/noticias' });

    const moreNews = screen.getByTestId('more-news');
    const newsCards = await screen.findAllByTestId('news-card');

    expect(newsCards).toHaveLength(9);

    await user.click(moreNews);

    expect(newsCards).toHaveLength(18);
  });
});
