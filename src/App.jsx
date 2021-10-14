// NPM packages
import { useState, useCallback, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Project files
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import { getCollection } from "./scripts/fireStore";
import { useCandidates } from "./state/CandidatesProvider";

export default function App() {
  // Global state
  const { dispatch } = useCandidates();

  // Local state
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error

  // Properties
  const PATH = "candidates";

  // Methods
  const fetchData = useCallback(async (path) => {
    try {
      const candidates = await getCollection(path);

      dispatch({ type: "SET_CANDIDATES", payload: candidates });
      setStatus(1);
    } catch {
      setStatus(2);
    }
  }, []);

  useEffect(() => fetchData(PATH), [fetchData]);

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
