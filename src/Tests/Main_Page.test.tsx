import { screen } from '@testing-library/dom';
import renderWithRouter from './utils/RenderWithRouter';
import App from '../App';

describe('Analisa a funcionalidade da Main Page', () => {
  test('Verifica se a main page é renderizada corretamente', () => {
    renderWithRouter(<App />);
  });
});
