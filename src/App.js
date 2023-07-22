import "./App.css";
import React from "react";

function App() {
  return (
    <div className="bg-stone-100 min-h-[100vh] p-5">

      <p className="text-xs">this is the main branch</p>

      <div className="container p-5 bg-stone-200 text-xs">
        <p className="underline font-bold mb-2">code documentation</p>
        <ol className="list-decimal list-inside">
          <li>npm install tailwindcss</li>
          <li>npm install @babel/plugin-proposal-private-property-in-object</li>
          <li>-</li>
        </ol>
      </div>

    </div>
  );
}

export default App;
