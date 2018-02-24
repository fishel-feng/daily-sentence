import React, {Component} from 'react';
import MediaQuery from 'react-responsive';
import './App.css';
import Sentence from './components/sentence'
import MSentence from './components/m-sentence'

class App extends Component {

  render() {
    return (
      <div className="App">
        <MediaQuery query="(min-device-width: 1224px)">
          <Sentence/>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <MSentence/>
        </MediaQuery>
      </div>
    );
  }
}

export default App;
