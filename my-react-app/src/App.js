import './App.css';
//import Greeting from './Greeting';
import {Greeting} from './Greeting';
import { PeopleList } from './PeopleList';

const people = [{
  name:"John",
  age:20,
},{
  name:"Joe",
  age:30,
}
]

const displayAlert = () => {
  alert("Hello!")
}

function App() {
  let isMorning = (new Date()).getHours() < 12;
  let greetingElement = isMorning
    ?<h3>Good Morning!</h3>
    :<h3>Good Evening!</h3>
  let adjective = "Cool"
  let url = "https://reactjs.org"
  return (
    <div className="App">
      <header className="App-header">
        {greetingElement}
        <p style={{color:'red', fontSize:'96px'}}>Big red Text</p>
        <Greeting name="John" numberofMessages={0} />
        <PeopleList people={people} />
        <button onClick={displayAlert}>Click Me!</button>
        <p>
          This is so {adjective}.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel={url}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
