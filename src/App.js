import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.props.title}</h1>
        <div>{this.props.num}</div>
        <div>{JSON.stringify(this.props.myObj)}</div>
        <div>{this.props.myArr[2]}</div>
        <div>{this.props.myFunc(10,20)}</div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    )
  }
}

function App() {
  const add = (a,b) => a+b;
  return (
    <div className="App">
      <Header title={"Hello1 from App"} num={3}
      myFunc={add}
      myArr={[1,2,3]} 
      myObj={{
        a: 5,
        b: 6,
      }}/>
    </div>
  );
}

export default App;
