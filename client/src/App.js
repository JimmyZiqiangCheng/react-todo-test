import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Todo from './components/Todo';
import TodoDetail from './components/TodoDetail';
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
            <Route exact path = "/todos/:id">
             <TodoDetail />
            </Route>
          </Switch>
          </div>        
        </div>
      </Router>
    </>
  );
}

export default App;
