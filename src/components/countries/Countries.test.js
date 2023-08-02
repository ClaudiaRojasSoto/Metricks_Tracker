import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Countries from './Countries';

describe('Countries tests', () => {
  let countries;
  beforeAll(async () => {
    countries = renderer.create(
      <Provider store={store}>
        <Router>
          <Countries />
        </Router>
      </Provider>,
    ).toJSON();
  });

  it('Component should render correctly', () => {
    expect(countries).toBeTruthy();
  });

  it('It should match its snapshot', () => {
    expect(countries).toMatchSnapshot();
  });
});
