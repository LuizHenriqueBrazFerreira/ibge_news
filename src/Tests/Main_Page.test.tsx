import { screen } from '@testing-library/dom';
import { vi } from 'vitest';
import renderWithRouter from '../utils/RenderWithRouter';
import App from '../App';
import { titleMainPage } from '../utils/constants';
import { apiFullMock } from '../mocks/apiFullMock';

describe('Analisa a funcionalidade da Main Page', async () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const mockApiResponse = {
    ok: true,
    json: async () => apiFullMock,
  } as Response;

  const newsCards = await screen.findAllByTestId('news-card');
  const moreNews = screen.getByTestId('more-news');
  test('Verifica se a main page é renderizada corretamente', () => {
    const title = screen.getByText(titleMainPage);

    vi.spyOn(global, 'fetch').mockResolvedValueOnce(mockApiResponse);

    renderWithRouter(<App />);

    expect(title).toBeInTheDocument();

    expect(title).toHaveTextContent(titleMainPage);

    expect(newsCards).toHaveLength(9);

    expect(moreNews).toBeInTheDocument();

    expect(moreNews).toHaveTextContent(/mais notícias/i);
  });

  test('Verifica se a Main Page é renderizada na rota correta', () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce(mockApiResponse);

    renderWithRouter(<App />);

    const { pathname } = window.location;

    expect(pathname).toBe('/');
  });

  test('Verifica se ao clicar no botão "Mais notícias" é carregado mais 9 notícias na Main Page', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce(mockApiResponse);

    const { user } = renderWithRouter(<App />);

    expect(newsCards).toHaveLength(9);

    await user.click(moreNews);

    expect(newsCards).toHaveLength(18);
  });

  test('Verifica se ao renderizar a página principal, a notícia principal é renderizada corretamente', () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce(mockApiResponse);

    renderWithRouter(<App />);

    const principalNews = screen.getByRole('heading', { level: 3 });

    expect(principalNews).toHaveTextContent(/IBGE oferece 895 vagas no Concurso Público Nacional Unificado/i);
  });

  test('Verifica se ao clicar no botão "Releases" a url é devidamente alterada', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce(mockApiResponse);

    const { user } = renderWithRouter(<App />);

    const releaseBtn = screen.getByTestId('release-btn');

    await user.click(releaseBtn);

    const { pathname } = window.location;

    expect(pathname).toBe('/release');
  });

  test('Verifica se ao clicar no botão "Notícias" a url é devidamente alterada', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce(mockApiResponse);

    const { user } = renderWithRouter(<App />);

    const newsBtn = screen.getByTestId('news-btn');

    await user.click(newsBtn);

    const { pathname } = window.location;

    expect(pathname).toBe('/noticia');
  });
});
