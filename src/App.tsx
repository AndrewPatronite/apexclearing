import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  // @ts-ignore
  const name = useSelector((state) => state.name);

  useEffect(() => {
    dispatch({ type: 'nameChange', value: `${name} Patronite` });
    //eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello {name}</p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
