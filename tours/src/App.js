import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(1);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true)
    const response = fetch(url);
    const tours = await response.json;
    console.log(tours)
  }
  if(loading){
    return(
      <Loading />
    )
  }
  return(
    <Tours />
  )
}

export default App
