import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello From Amplify</h1>
        <div style={{ border: 'solid 2px red', padding: '5px', backgroundColor: 'yellow', color: 'orange' }}>
          <h1>We now have Auth!</h1>
        </div>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
