import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ViewDetails() {
  const[doctor,setDoctor]=useState({});

  let params=useParams();

  async function getData(){
    let res=await axios.get(`https://doc-back-v2nv.onrender.com/doctors/${params.id}`)
    console.log(res.data);
    setDoctor(res.data);
  }

  useEffect(()=>{
    getData();
  },[])

  return (
    <div>
        <h1>Doctor details</h1>
        <h1>{doctor.id}</h1>
        <h1>{doctor.name}</h1>
        <h1>{doctor.salary}</h1>
        <h1>{doctor.gender}</h1>
    </div>
  )
}

export default ViewDetails
