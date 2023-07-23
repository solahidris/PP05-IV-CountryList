import "./App.css";
import React from "react";
import CodeThinkingProcess from "./components/CodeThinkingProcess";
import CodeInstructions from "./components/CodeInstructions";
import CountryLists from "./components/CountryLists";
import CountryDetails from "./components/CountryDetails";

function App() {
  return (
    <div className="bg-stone-100 min-h-[100vh]">
      {/* <CountryLists /> */}
      <CountryDetails />

      <CodeThinkingProcess />
      <CodeInstructions />

      <p className="text-xs">this is the main branch</p><br/>
    </div>
  );
}

export default App;
