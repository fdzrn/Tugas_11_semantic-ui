import React, {Component} from 'react';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';

class App extends Component {
  render(){
    return(
      <div>
        <First/>
        <Second/>
        <Third/>
      </div>
    );
  }
}
export default App;
