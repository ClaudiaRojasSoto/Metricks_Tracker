import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Countries from './components/Countries';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/countries/:continent" element={<Countries />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
