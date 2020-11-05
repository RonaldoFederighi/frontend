import React from 'react';
import './global.css';
import Routes from './routes';
import Footer from './Footer';

export default function App() {
  const date = new Date();
  const year = date.getFullYear();

  return (
      <div>
        <Routes />
        <Footer year={year}  />
      </div>
  );
}
