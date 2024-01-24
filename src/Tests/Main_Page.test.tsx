import { screen } from '@testing-library/dom';
import { vi } from 'vitest';
import renderWithRouter from '../utils/RenderWithRouter';
import App from '../App';
import { titleMainPage } from '../utils/constants';
import { apiFullMock } from '../mocks/apiFullMock';
import { SearchApiMock } from '../mocks/SearchApiMock';

describe('Analisa a funcionalidade da Main Page', async () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const mockApiResponse = {
    ok: true,
    json: async () => apiFullMock,
  } as Response;

  const mockApiSearch = {
    ok: true,
    json: async () => SearchApiMock,
  } as Response;

  test('Verifica se a main page é renderizada corretamente', async () => {
    vi.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve(mockApiResponse));
    renderWithRouter(<App />);

    const newsCards = await screen.findAllByTestId('news-card');
    const moreNews = await screen.findByTestId('more-news');
    const title = await screen.findByText(titleMainPage);

    expect(title).toBeInTheDocument();

    expect(title).toHaveTextContent(titleMainPage);

    expect(newsCards).toHaveLength(9);

    expect(moreNews).toBeInTheDocument();

    expect(moreNews).toHaveTextContent(/mais notícias/i);
  });

  test('Verifica se a Main Page é renderizada na rota correta', () => {
    vi.spyOn(global, 'fetch').mockResolvedValue(mockApiResponse);

    renderWithRouter(<App />);

    const { pathname } = window.location;

    expect(pathname).toBe('/');
  });

  test('Verifica se é renderizado 9 notícias na Main Page', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce(mockApiResponse);

    const { user } = renderWithRouter(<App />);
    const newsCards = await screen.findAllByTestId('news-card');

    expect(newsCards).toHaveLength(9);

    const moreNews = await screen.findByTestId('more-news');

    await user.click(moreNews);
  });

  test('Verifica se ao renderizar a página principal, a notícia principal é renderizada corretamente', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce(mockApiResponse);

    renderWithRouter(<App />);

    const principalNews = await screen.findByRole('heading', { level: 3 });

    expect(principalNews).toHaveTextContent(/Favelas e Comunidades Urbanas: IBGE muda.../i);
  });

  test('Verifica se ao clicar no botão "Releases" a url é devidamente alterada', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce(mockApiResponse);

    const { user } = renderWithRouter(<App />);

    const releaseBtn = await screen.findByTestId('release-btn');

    await user.click(releaseBtn);

    const { pathname } = window.location;

    expect(pathname).toBe('/release');
  });

  test('Verifica se ao clicar no botão "Notícias" a url é devidamente alterada', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce(mockApiResponse);

    const { user } = renderWithRouter(<App />);

    const newsBtn = await screen.findByTestId('news-btn');

    await user.click(newsBtn);

    const { pathname } = window.location;

    expect(pathname).toBe('/noticia');
  });
  test('Verifica se é possivel fazer uma busca por tema específico', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce(mockApiResponse).mockResolvedValueOnce(mockApiSearch);

    const { user } = renderWithRouter(<App />);

    await user.click(await screen.findByTestId('search-btn'));

    await user.type(await screen.findByTestId('search-input'), 'silvicultura');

    const newsCards = await screen.findAllByTestId('news-card');

    expect(newsCards).toHaveLength(9);

    await user.click(await screen.findByTestId('principal-favorite'));
  });
});
