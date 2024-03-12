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

  test('Verifica se a página de Releases é renderizado com a notícia principal', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce(apiReleaseResponse);

    renderWithRouter(<App />);

    const principalNews = await screen.findByRole('heading', { level: 3 });

    expect(principalNews).toHaveTextContent(/Em novembro, vendas no varejo variam 0,1%/i);
  });

  test('Verifica se a página Releases possui 9 cards de notícias', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce(apiReleaseResponse);

    renderWithRouter(<App />, { route: '/release' });
    const newsCards = await screen.findAllByTestId('news-card');

    expect(newsCards).toHaveLength(9);
  });
});
