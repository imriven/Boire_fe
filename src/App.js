import axios from "axios"
import './App.css';
import React, { useEffect, useState } from "react"

const url = "http://localhost:3300/api"


function App() {
  const [wineList, setWineList] = useState();
  useEffect(() => {
    axios
      .get(`${url}/user/following`)
      .then(res => {
        setWineList(res.data)
      })
      .catch(err => console.log( err.response.statusText ));
  })
  return (
    <div className="App">
{wineList && wineList.map( w => {
  return <div> {w.vineyard}, {w.year} </div>
})}
    </div>
  );
}

export default App;
