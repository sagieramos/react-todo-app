import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/app.scss';
import TodosLogic from './components/TodosLogic';

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);
root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <TodosLogic />
  </Suspense>,
);
