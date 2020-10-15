import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers';//路由
import Redux from './redux-pages';//redux

ReactDOM.render(
  // <AppRouter />,
    <Redux />,
  document.getElementById('root')
);

