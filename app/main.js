import React from 'react';
import ReactDOM from 'react-dom';
import ReduxProvider from './components/ReduxProvider.jsx';
import { AppContainer } from 'react-hot-loader';

const render = (Component) => {
  ReactDOM.render(
    <ReduxProvider/>,
    document.getElementById('root'),
  );
};

render(ReduxProvider);
