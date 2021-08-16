import './App.css';
import MyHeader from './components/Header';
import Counter from './components/Counter';


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
      <Counter initialCount={0}/>
      <Counter initialCount={100}/>
    </div>
  );
}

export default App;
