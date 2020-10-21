import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers';//路由
import Redux from './redux-pages';//redux
import ReduxHooks from './redux-hooks';//redux

ReactDOM.render(
  // <AppRouter />,
    <ReduxHooks />,
  document.getElementById('root')
);

