import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TaskBoard from './components/TaskBoard';
import NavBar from './components/NavBar'
import reducer from './store/reducres';

import "./index.scss"

const store = createStore(reducer);

ReactDOM.render(
  <>
  <NavBar />
  <Provider store={store}>
    <TaskBoard />
  </Provider>
  </>,
  document.getElementById('root')
);
