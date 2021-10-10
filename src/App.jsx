// NPM packages
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Project files
import Header from "./components/Header";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import { useCandidate } from "./state/CandidateProvider";

export default function App() {
  // Global state
  const { candidates } = useList();

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Edit} path="/edit" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
