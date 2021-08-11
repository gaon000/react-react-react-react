import './App.css';
import MyHeader from './components/Header';


function App() {
  const add = (a,b) => a+b;
  return (
    <div className="App">
      <MyHeader title={"Hello1 from App"} num={3}
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
