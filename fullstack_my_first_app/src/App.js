import './App.css';
import { MyRoutes } from './MyRoute';
import { ThemeContext } from './ThemeContext';


const theme = 'light'

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <div className="App">
        <MyRoutes />
      </div>
    </ThemeContext.Provider>
  );
}
 
export default App;
