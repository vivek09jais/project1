import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from './Navbar/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import './App.css';
class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <div>
           <Navbar/>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />>
          </Switch>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
