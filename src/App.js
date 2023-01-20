import { useState,useEffect  } from 'react';
import './App.css';
import PeraSearch from './components/PeraSearch';

function App() {
 
   const [pera,setPera] = useState([])
   const [peraLimit,setPeraLimit] = useState(1)

   useEffect(()=>{
        
   fetch(`https://hipsum.co/api/?type=hipster-centric&paras=${peraLimit}`)
   .then(res => res.json())
   .then(json => setPera(json))       
   },[peraLimit])

  const settingPeraLimit = e =>{
    setPeraLimit(e.target.value)
  } 
  return (
    <div className="App">
      <h1>Sample Peragraph Generator</h1>
     <PeraSearch peraLimit={settingPeraLimit} />
     <h1 style={{fontSize:'1rem',fontWeight:'lighter',width:'60rem',margin:'2px auto'}}>{pera}</h1>
    </div>
  );
}

export default App;
