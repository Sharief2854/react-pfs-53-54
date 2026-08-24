import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card from './Card';
function Home() {
    const[doctors,setDoctors]=useState([]);

    async function getData(){
       let res=await axios.get("https://doc-back-v2nv.onrender.com/doctors");
        console.log(res.data);
        setDoctors(res.data);
    }

    let cards=doctors.map(function(item,ind){
        return(
            <Card name={item.name} specialization={item.specialization} gender={item.gender} id={item.id} key={ind}/>
        )
    });

    useEffect(function(){
        getData();
    },[])
  return (
    <div>
        <div className='container'>
            {cards}
        </div>
    </div>
  )
}

export default Home
