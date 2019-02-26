import React, { Component } from 'react';
import logo from './red_packet.png';
import './App.css';
import WorldMap from './WorldMap';
//import BarChart from './BarChart'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
        Play like no one's watching.
        </p>
          <a
            className="App-link"
            href="https://github.com/Joan-SHI/cny-survey-form2019"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn about this project
          </a>
        </header>
        {/* <div>
      <BarChart data={[5,10,1,3]} size={[500,500]} />
      </div> */}
      <div>
      <WorldMap data={[5,10,1,3]} size={[500,500]} />
      </div>
      </div>
    );
  }
}

export default App;
