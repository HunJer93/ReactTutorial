import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import ChildComponent from './components/ChildComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './appStyles.css' //CSS styles have a global scope
import styles from './appStyles.module.css' //CSS modules have a local scope only
function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline />
      <StyleSheet primary={true}/>
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/*<Counter />*/}
      {/* <Message /> */}
      {/* <Greet name="Bruce" heroName="Hulk">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet> */}
      {/* {<Greet name="Bob"  heroName="The Builder" />} */}
      {/* {<Welcome name="Bruce" heroName="Hulk" />} */}
      {/*<Welcome name="Clark" heroName="Superman" />
      <Welcome name="Bob" heroName="The Builder" /> */}
      {/*<Hello />*/}
    </div>
  );
}


export default App;
