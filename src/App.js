import React from 'react';
import './App.css';
import data from './data.json';
import DataTable from './data-table/DataTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">CoD Black Ops 4 Zombies Armory</header>
      <main className="App-main">
        <DataTable rows={ data.guns } />
      </main>
      <footer className="App-footer">
        Corrections? Open an Issue on&nbsp;
        <a href="https://github.com/nickstanish/blops4-zombies-armory">
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
