import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello From Dev</h1>
        <div style={{ border: 'solid 2px red', padding: '5px', backgroundColor: 'yellow', color:'orange'}}>
          <h2>Feature 1 Updated</h2>
        </div>
      </header>
    </div>
  );
}

export default App;
