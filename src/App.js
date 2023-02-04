import React from 'react';
import './App.css';
import Toolbar from './Toolbar';
import Window from './Window';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0
    }
  }

  componentDidMount() {
    this.setState({
      height: typeof(this.divElement),
      width: typeof(this.divElement)
    });


  }

  render(){
    return (
      <div id = 'Outline'>
        <Toolbar/>
        <Window height={this.state.height} width={this.state.width}/>
      </div>
    );
  }
  
}

export default App;
