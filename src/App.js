import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'  //this is an API that we created
function App() {
  //we have two states one for loading and one for tours
  const [loading, setLoading] = useState(true)  
  const [tours,setTours] = useState([]);

  const fetchTours = async()=>{
    setLoading(true)
    try{
      const response = await fetch(url)
      const tours = await response.json() 
      setLoading(false)
      setTours(tours)
    }catch(error){
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours(); 
  },[])  //receive the API data one time

  if(loading){
    return(
      <main>
        <Loading />
      </main>
    );
  }
  if(tours.length === 0){
    return(
      <main>
          <div className='title'>
            <h2>No Tours Left</h2>  
            <button className='btn' onClick={() => fetchTours()}>Refresh</button> 
          </div>
      </main>
    )
  }

//remove each tour
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  //if loading is not true (false) and we receive API data
  return(
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  ) 
}
export default App
