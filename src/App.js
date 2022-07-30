import axios from 'axios' 
import { useEffect, useState } from 'react'
import { Card } from './components/Card'
const App = () =>{

  const [burger,SetBurger] = useState(null)

  const fetchData = async () =>{
    const burgerData = await axios.get('http://localhost:8000/burgers')
    const data = Object.keys(burgerData.data.data).map(burger => burgerData.data.data[burger])
    SetBurger(data);
    
    console.log("here",data)
  }

  useEffect(()=>{
    fetchData()
  
  },[])
  
  return (
    <div>
      <h1 className='title'>My favorite Burger</h1>
      <div className='burger-container'>
        {burger?.map(burger => <Card key={burger.id} burger={burger}/>
            
        )
        }
      </div>
    </div>
  );
}

export default App;
