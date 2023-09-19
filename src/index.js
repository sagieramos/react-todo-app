import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/app.scss';
import TodosLogic from './components/TodosLogic';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);
root.render(
  <div>
    <TodosLogic />
  </div>,
);
