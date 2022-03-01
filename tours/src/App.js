import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => {return tour.id !== id})
    // if id matches it won't be added in new tours
    setTours(newTours);
  }

  const fetchTours = async () => {
    setLoading(true)
    try{
      const response = await fetch(url);
      const tours = await response.json();
      console.log(tours)
      setLoading(false);
      setTours(tours);
    }
    catch(error) {
      setLoading(false);
      console.log(error);
    }
  }
  useEffect(() => {
    fetchTours();
  }, [])
  // fetchTours();

  if(loading){
    return(
      <main>
        <Loading />
      </main>
    )
  }
  if(tours.length === 0){
    return(
      // <h1>No tours left</h1>
      <main>
        <div className = 'title'>
          <h2>No tours left</h2>
          <button className='btn' onClick={fetchTours}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return(
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App
