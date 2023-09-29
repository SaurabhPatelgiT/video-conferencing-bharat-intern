import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"

const Home = () => {
    const [value,setValue] = useState();
    
    const navigate = useNavigate();

   console.log("value",value) 
   const handleClick = ()=>{
       navigate(`/room/${value}`)

   }

  return (
    <div class="Home">
        <input type="text" 
         placeholder='Enter your room id' 
          onChange={(e)=>setValue(e.target.value)}
         />
        <button onClick={handleClick}>Join</button>
    </div>
  )
}

export default Home