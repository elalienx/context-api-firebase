import { useCallback, useEffect, useState } from "react";
import { fireStoreInstance } from "./scripts/firebase";
import { getCollection } from "./scripts/fireStore";

export default function App() {
  // Local state
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded but empty, 2 loaded with data, 3 error

  // Methods
  const fetchData = useCallback(async () => {
    const data = await getCollection(fireStoreInstance, "candidates");

    if (data.length === 0) {
      setStatus(1);
    } else if (data.length > 0) {
      setData(data);
      setStatus(2);
    } else {
      setStatus(3);
    }
  }, [data]);

  useEffect(() => fetchData(), [fetchData]);

  return (
    <div className="App">
      {status === 0 && <p>Loading ⏱</p>}
      {status === 1 && <p>There is not candidates.</p>}
      {status === 2 && <p>Total candidates @{data.length}@.</p>}
      {status === 3 && <p>Error 🚨</p>}
    </div>
  );
}
