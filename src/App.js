import React from "react";
import "./App.css";
import dummyData from "./MOCK_DATA.json";

function App() {
  return (
    <div className="App">
      <input type="text" placeholder="Search..." />
      {dummyData.map((val) => {
        return (
          <div className="contact" key={val.id}>
            <p>{val.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
