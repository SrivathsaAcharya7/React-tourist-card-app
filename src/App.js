// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import Tours from './components/Tours';
import data from "./data"
import Cards from './components/Cards';
import "./index.css"

function App() {
  const[tours,setTours]=useState(data)
  function removeTour(id){
    const newTours=tours.filter(tour=>tour.id!==id);
    setTours(newTours)
  }
  if(tours.length===0){
    return(
      <div className='refresh'>
        <h2>No Tours Left</h2>
        <button className='btnWhite' onClick={()=>setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return (
<div>
  <Tours tours={tours} removeTour={removeTour}></Tours>
</div>
  );
}

export default App;