import React from 'react';
import ReactDOM from 'react-dom/client';
import reactLogo from './images/react.svg';
import './styles/app.scss';
import TodosLogic from './components/TodosLogic';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);
root.render(
  <div>
    <TodosLogic />
    <h1>Hello from React application</h1>
    <img src={reactLogo} className="logo react" alt="React logo" />
  </div>,
);
