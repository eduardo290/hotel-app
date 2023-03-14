import React, { useState, useEffect } from 'react';

function CatFact() {
  const [fact, setFact] = useState('');

  useEffect(() => {
    async function fetchFact() {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setFact(data.fact);
    }
    fetchFact();
  }, []);

  return (
    <div>
      <p>{fact}</p>
    </div>
  );
}

export default CatFact;
