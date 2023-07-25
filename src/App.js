// App.js

import "./App.css";
import React from "react";
import CountryApp from "./components/CountryLists/CountryApp";

function App() {
  return (
    <div className="bg-stone-100/10 dark:bg-slate-700 min-h-[100vh]">
      <CountryApp />
    </div>
  );
}

export default App;
