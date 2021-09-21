import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Switch, Route} from "react-router-dom";
import NoteState from './Context/notes/NoteState';

function App() {
  return (
    <div>
      <NoteState>
      <Router>
      <Navbar/>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
      </NoteState>
    </div>
  );
}

export default App;
