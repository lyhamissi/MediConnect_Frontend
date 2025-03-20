import React, { useEffect, useState } from 'react'
import NurseCard from './NurseCard'
import axios from 'axios'
const AllNurses = () => {
  const [getnurses, setGetNurses] = useState([]);
  useEffect(()=>{
    const getNurses = async () =>{
      try{
        const response = await axios.get("http://localhost:5001/user/getAllNurses");
        setGetNurses(response.data);
      }
      catch(error){
        console.log(error);
        
      }
    }
    getNurses();
  },[]);
  return (
    <div>
      <div className="doctor-list">
        {getnurses.map((getnurse)=>(
          <NurseCard key={getnurse._id} getnurse={getnurse}/>
        ))}
      </div>
    </div>
  )
}

export default AllNurses
