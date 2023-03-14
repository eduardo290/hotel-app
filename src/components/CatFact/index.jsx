import React, { useState, useEffect } from 'react';

function CatFact() {
    const [fact, setFact] = useState('');
  
    async function fetchFact() {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setFact(data.fact);
    }

  return (
    <div>
      <p>{fact}</p>
      <button onClick={fetchFact}>Get a new fact</button>
    </div>
  );
}

export default CatFact;
