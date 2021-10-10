// NPM packages
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Project files
import Header from "./components/Header";
import Home from "./pages/Home";
import Edit from "./pages/Edit";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route component={Home} exact to="/" />
          <Route component={Edit} exact to="/edit" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
