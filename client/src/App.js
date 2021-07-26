import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Todo from './components/Todo';
import Todotable from './components/Todotable';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
          <Switch>
            <Route exact path = "/">
             <Todo />
            </Route>
            <Route exact path = "/todo">
              <Todo />
            </Route>
            <Route exact path = "/about">
             <About />
            </Route>
          </Switch>
          </div>        
        </div>
      </Router>
    </>
  )
}

export default App;
