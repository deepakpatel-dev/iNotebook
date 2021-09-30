import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoteState from "./Context/notes/NoteState";
import Alert from './Components/Alert';
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  return (
    <div>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="This is Amazing Notebook"/>
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </div>
  );
}

export default App;
