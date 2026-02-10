import { useState } from "react";
import MainDashboard from "./pages/MainDashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex">
        <MainDashboard />
      </div>
    </>
  );
}

export default App;
