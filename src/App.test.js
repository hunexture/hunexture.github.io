import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the home page hero and main navigation', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: 'AI software, engineered to spec.' })).toBeInTheDocument();
  expect(screen.getAllByRole('navigation').length).toBeGreaterThan(0);
  expect(screen.getByRole('region', { name: 'Technologies we work with' })).toBeInTheDocument();
});

test('an unknown address shows a not-found page instead of the home page', async () => {
  window.history.pushState({}, '', '/no-such-page');
  render(<App />);
  expect(await screen.findByRole('heading', { level: 1, name: 'Page not found' })).toBeInTheDocument();
  window.history.pushState({}, '', '/');
});

test('portfolio filters still switch the visible projects', () => {
  render(<App />);
  const mobile = screen.getByRole('button', { name: 'Mobile' });
  fireEvent.click(mobile);
  expect(mobile).toHaveAttribute('aria-pressed', 'true');
});
