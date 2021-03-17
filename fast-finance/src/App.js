import React, {useState} from 'react';
import StatusCard from './components/StatusCard'

const App  = () => {
  const [loadingData,setLoadingData] = useState(false);

  return(
    <section>
      <button onClick={() => setLoadingData(true)}>nacist data</button>    
      {loadingData && <StatusCard /> }      
    </section>
  )
}

export default App;