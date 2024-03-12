import { vi } from 'vitest';
import { screen } from '@testing-library/react';
import { apiReleaseMock } from '../mocks/apiReleaseMock';
import renderWithRouter from '../utils/RenderWithRouter';
import App from '../App';

describe('Verifica se a Página favoritos, renderiza as noticias favoritadas', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const apiReleaseResponse = {
    ok: true,
    json: async () => apiReleaseMock,
  } as Response;

  test('Verifica se ao clicar no botão Favoritos, a página é renderizada corretamente', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce(apiReleaseResponse);

    const { user } = renderWithRouter(<App />, { route: '/release' });

    await user.click(await screen.findByTestId('favorite-btn'));

    const { pathname } = window.location;

    expect(pathname).toBe('/favorites');
  });
  test('Verifica se ao clicar no botão de favoritar uma noticia, ela é favoritada e aparece na página de favoritos', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce(apiReleaseResponse);

    const { user } = renderWithRouter(<App />, { route: '/release' });

    const favoriteButton = await screen.findAllByTestId('favorite-button');

    await user.click(favoriteButton[0]);

    await user.click(await screen.findByTestId('favorite-btn'));

    const newsCards = await screen.findAllByTestId('news-card');
    expect(newsCards).toHaveLength(1);
  });
});
