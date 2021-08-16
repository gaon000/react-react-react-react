import './App.css';
import MyHeader from './components/Header';
import Counter from './components/Counter';
import ImageSlider from './components/ImageSlider';


function App() {
  const add = (a, b) => a + b;
  return (
    <div className="App">
      <ImageSlider />
    </div>
  );
}

export default App;
