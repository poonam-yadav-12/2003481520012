// NumberManagement.js
import React, { useState } from "react";
import { fetchNumbers } from "./Apiservice";

function NumberManagement() {
  const [inputUrls, setInputUrls] = useState("");
  const [numbers, setNumbers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const urls = inputUrls.split("\n").map((url) => url.trim());
    try {
      const mergedNumbers = await fetchNumbers(urls);
      setNumbers(mergedNumbers);
    } catch (error) {
      // Handle errors
    }
  };

  return (
    <div>
      <h1>Number Management Service</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter URLs, one per line"
          value={inputUrls}
          onChange={(e) => setInputUrls(e.target.value)}
        />
        <button type="submit">Fetch Numbers</button>
      </form>
      <div>
        <h2>Fetched Numbers</h2>
        <ul>
          {numbers.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NumberManagement;
