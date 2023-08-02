import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar tests', () => {
  let navbar;
  beforeAll(() => {
    navbar = renderer.create(
      <Router>
        <Navbar />
      </Router>,
    ).toJSON();
  });

  it('Component should render correctly', () => {
    expect(navbar).toBeTruthy();
  });

  it('It should match its snapshot', () => {
    expect(navbar).toMatchSnapshot();
  });

  describe('Back button', () => {
    it('should render back button if not on the root path', () => {
      window.history.pushState({}, '', '/not-root');
      render(
        <Router>
          <Navbar />
        </Router>,
      );
      const backButton = screen.getByRole('button');
      expect(backButton).toBeInTheDocument();
    });

    it('should not render back button on the root path', () => {
      window.history.pushState({}, '', '/');
      render(
        <Router>
          <Navbar />
        </Router>,
      );
      const backButton = screen.queryByRole('button');
      expect(backButton).not.toBeInTheDocument();
    });
  });
});
