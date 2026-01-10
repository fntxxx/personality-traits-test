// App.jsx
import { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { fetchBigFive } from "./services/fetchBigFive";

import Home from "./pages/Home";
import Test from "./pages/Test";
import Result from "./pages/Result";

const App = () => {
  const [testData, setTestData] = useState(null);
  useEffect(() => {
    fetchBigFive().then(setTestData);
  }, []);

  if (!testData) return <div>載入中...</div>;

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={<Home meta={testData.meta} />}
        />
        <Route
          path="/test"
          element={<Test testData={testData} />}
        />
        <Route
          path="/result"
          element={<Result results={testData.results} />}
        />
      </Routes>
    </HashRouter>
  );
};

export default App;