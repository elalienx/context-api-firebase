// NPM packages
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Project files
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import { useCandidates } from "./state/CandidatesProvider";

export default function App() {
  // Global state
  const { status } = useCandidates();

  // Component
  const Browser = (
    <BrowserRouter>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Edit} path="/edit/:id" />
      </Switch>
    </BrowserRouter>
  );

  return (
    <div className="App">
      {status === 0 && <p>Loading ⏱</p>}
      {status === 1 && Browser}
      {status === 2 && <p>Error 🚨</p>}
    </div>
  );
}
