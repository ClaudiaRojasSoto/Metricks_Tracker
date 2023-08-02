import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import HomePage from './HomePage';

describe('HomePage tests', () => {
  let homePage;

  beforeAll(() => {
    homePage = renderer
      .create(
        <Provider store={store}>
          <Router>
            <HomePage />
          </Router>
        </Provider>,
      )
      .toJSON();
  });

  it('Component should render correctly', () => {
    expect(homePage).toBeTruthy();
  });

  it('It should match its snapshot', () => {
    expect(homePage).toMatchSnapshot();
  });
});
