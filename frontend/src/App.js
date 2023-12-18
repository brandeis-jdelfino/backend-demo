import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/hello/APP', { 
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }})
      .then(response => response.text())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="App">
      {data}
    </div>
  );
}

export default App;
