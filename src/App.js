// App.js

import "./App.css";
import React from "react";
import CountryLists from "./components/CountryLists";
// eslint-disable-next-line
import CodeThinkingProcess from "./components/CodeThinkingProcess";
// eslint-disable-next-line
import CodeInstructions from "./components/CodeInstructions";

function App() {
  return (
    <div className="bg-stone-100 min-h-[100vh]">
      <CountryLists />
      {/* <CodeInstructions /> */}
      {/* <CodeThinkingProcess /> */}
    </div>
  );
}

export default App;
