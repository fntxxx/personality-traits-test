import { useEffect, useState } from "react";
import { fetchBigFive } from "./services/fetchBigFive";

const App = () => {
  const [testData, setTestData] = useState(null);

  useEffect(() => {
    fetchBigFive().then(setTestData);
  }, []);

  if (!testData) return <div>載入中...</div>;

  return (
    <>
      {/* testData.meta */}
      {/* testData.questions */}
      {/* testData.results */}
    </>
  );
};

export default App
