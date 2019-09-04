import React, { PureComponent } from 'react';
import Header from '../Header/Header';
import './App.scss';

class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <Header />
      </div>
    );
  }
}

export default App;
