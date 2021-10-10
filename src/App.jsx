// NPM packages
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Project files
import Header from "./components/Header";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import { useCandidate } from "./state/CandidateProvider";
import { useCallback, useEffect, useState } from "react";

export default function App() {
  // Global state
  const { candidates } = useCandidate();

  // Local state
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error

  // Methods
  const checkStatus = useCallback(async () => {
    const result = await candidates;

    console.log("App.jsx useCallback");
    console.log(result);

    if (result.length > 0) setStatus(1);
    else setStatus(2);
  }, [candidates]);

  useEffect(() => checkStatus(), [checkStatus]);

  // Components
  const Browser = (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Edit} path="/edit" />
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
