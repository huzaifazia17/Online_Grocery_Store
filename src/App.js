import logo from './logo.svg'; //imports logo image and saves it into variable called logo
import './Styles/App.css';

// App.js contains template for Header and Footer

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          H2Z2 Grocery Store
        </p>

        <p>
          im gay
        </p>
        <p>
          Test
        </p>
      </header>
    </div>
  );
}

export default App;
