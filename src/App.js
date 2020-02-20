import React from 'react';

import './styles/App.css';

import Header from './components/Header'
import Rates from './components/Rates'
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Rates />
      </main>
    </div>
  );
}

export default App;
