import { useState } from "react";

const App = () => {
  const [num, setNum] = useState({ user: "Allu", age: 25 });

  const btnClick = () => {
    setNum((prev) => ({ ...prev, age: 50 }));
  };

  return (
    <div className="app-container">
      <div className="user-card">
        <h1 className="user-title">
          {num.user}, {num.age}
        </h1>

        <button onClick={btnClick} className="btn">
          Click
        </button>
      </div>
    </div>
  );
};

export default App;