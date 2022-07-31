import axios from 'axios' 
import { useEffect, useState } from 'react'
import { Card } from './components/Card'
import dataBurger from "./databurger.json"
import hotelBurger from "./datahotel.json"
const App = () =>{

  const [burger,SetBurger] = useState(null)
  const [hotel,SetHotel] = useState(null)

  const fetchData = async () =>{
    const burgerData = await axios.get('http://localhost:8000/burgers')
    const data = Object.values(burgerData.data.data).map(burger => burgerData.data.data[burger])
    SetBurger(data);
  }

  const fetchFromJson = async () =>{
    console.log(dataBurger)
    const burgerData = await dataBurger;
    const data = Object.values(burgerData.data)
    SetBurger(data);
    
    const hotelData = await hotelBurger;
    const data2 =hotelData.data.hotel_data.values
    SetHotel(data2);
    console.log(data2)
  }


  useEffect(()=>{
    //IF SHUT DOWN DATABASE
    //fetchData()
    fetchFromJson()
  },[])
  
  return (
    <div>
      <h1 className='title'>My favorite Burger</h1>
      
      <div className='burger-container'>
        {burger?.map(burger => <Card key={burger.id} burger={burger}/>)}
      </div>
      <div>
        <h1 class="hotel-title">HOTELS</h1>
        <div className='grid-example'>
          <h1>Name</h1>
          <h1>Rating</h1>
        </div>
        {hotel?.map((hotel,index) =>(
          <div key={index} className="grid-example">
            <div>{hotel.name}</div>
            <div>{hotel.rating}</div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
