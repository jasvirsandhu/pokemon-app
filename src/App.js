import { useState } from 'react';
import './App.css';
import Search from './Components/Search';

function App() {
  const [results, setResults] = useState([]);

  return (
    <>
    <div className="App">
      <h1>Pokemon App</h1>
    </div>
    <Search></Search>
    {/* <ResultList results={results}></ResultList> */}
    {/* <SearchResults></SearchResults> */}
    </>
  );
}

export default App;
