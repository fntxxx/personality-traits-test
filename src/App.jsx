import { useEffect, useState } from "react";
import { fetchBigFive } from "./services/fetchBigFive";
import Home from './pages/Home'

const App = () => {
  const [testData, setTestData] = useState(null);

  useEffect(() => {
    fetchBigFive().then(setTestData);
  }, []);

  if (!testData) return <div>載入中...</div>;

  return (
    <>
      <Home meta={testData.meta} />
      {/* testData.meta */}
      {/* testData.questions */}
      {/* testData.results */}
    </>
  );
};

export default App
