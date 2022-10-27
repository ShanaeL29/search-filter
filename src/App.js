import React, { useState } from "react";
import "./App.css";
import dummyData from "./MOCK_DATA.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      {dummyData
        .filter((val) => {
          if (!searchTerm) {
            return val;
          } else if (
            val.first_name.toLowerCase().substring(0, searchTerm.length) ===
            searchTerm.toLowerCase()
          )
            return val;
        })
        .map((val) => {
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
