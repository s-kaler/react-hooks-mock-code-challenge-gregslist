import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchedTerm, setTerm] = useState("");

  function handleSearch(query){
    setTerm(query);
  }
  
  return (
    <div className="app">
      <Header onSearchHeader={handleSearch} />
      <ListingsContainer query={searchedTerm}/>
    </div>
  );
}

export default App;
