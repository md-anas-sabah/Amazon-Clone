import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import SignUp from "./SignUp";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
