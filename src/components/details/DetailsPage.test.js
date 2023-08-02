import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import DetailsPage from './DetailsPage';

describe('DetailsPage tests', () => {
  let detailsPage;
  beforeAll(async () => {
    detailsPage = renderer.create(
      <Provider store={store}>
        <Router>
          <DetailsPage />
        </Router>
      </Provider>,
    ).toJSON();
  });

  it('Component should render correctly', () => {
    expect(detailsPage).toBeTruthy();
  });

  it('It should match its snapshot', () => {
    expect(detailsPage).toMatchSnapshot();
  });
});
