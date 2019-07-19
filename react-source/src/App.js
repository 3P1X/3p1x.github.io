import React from 'react';
import logo from './logo.svg';
import github_logo from './GitHub_Logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Epic-logo">
        <p className="Epic-text">3pic</p>
        <div className="Image">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
      <div className="bottom-part">
        <a
          href="https://github.com/3pic"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github_logo} className="github-logo" alt="Github" />
        </a>
        <p className="Parsa">©2019 - Parsa Sam</p>
      </div>
    </div>
  );
}

export default App;
