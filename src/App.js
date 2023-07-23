import "./App.css";
import React from "react";
import CodeThinkingProcess from "./components/CodeThinkingProcess";
import CodeInstructions from "./components/CodeInstructions";
import CountryLists from "./components/CountryLists";

function App() {
  return (
    <div className="bg-stone-100/50 min-h-[100vh]">
      <CountryLists />
      <div>
        <p className="py-5">hi</p>
        <p className="py-5">hi</p>
        <p className="py-5">hi</p>
      </div>
      <CodeThinkingProcess />
      <CodeInstructions />

      <p className="text-xs">this is the main branch</p><br/>
    </div>
  );
}

export default App;
