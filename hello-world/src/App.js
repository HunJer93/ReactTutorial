import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Hulk">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Bob"  heroName="The Builder" />
      <Welcome name="Bruce" heroName="Hulk" />
      <Welcome name="Clark" heroName="Superman" />
      <Welcome name="Bob" heroName="The Builder" />
      {/*<Hello />*/}
    </div>
  );
}


export default App;
