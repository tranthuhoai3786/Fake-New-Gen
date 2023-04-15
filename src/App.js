import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import LanDetect from './components/LanDetect';
import TextGen from './components/TextGen';

function App() {
  return (
    <div className="App">
      {/* <Hello/> */}
      <TextGen/>
      {/* <LanDetect/> */}
    </div>
  );
}

export default App;
