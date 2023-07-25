// App.js

import "./App.css";
import React from "react";
import CountryLists from "./components/CountryLists";
import CodeThinkingProcess from "./components/CodeThinkingProcess";
import CodeInstructions from "./components/CodeInstructions";

function App() {
  return (
    <div className="bg-stone-100/10 dark:bg-slate-700 min-h-[100vh]">
      <CountryLists />
      <CodeThinkingProcess />
      <CodeInstructions />
    </div>
  );
}

export default App;
