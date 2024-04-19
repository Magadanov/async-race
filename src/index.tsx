import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.createElement('div');
rootElement.id = 'root';
document.body.appendChild(rootElement);

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(<App />);
