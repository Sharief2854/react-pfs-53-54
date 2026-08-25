import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ViewDetails() {
  const[doctor,setDoctor]=useState({});

  let params=useParams();
  let navigate=useNavigate();

  async function getData(){
    let res=await axios.get(`https://doc-back-v2nv.onrender.com/doctors/${params.id}`)
    console.log(res.data);
    setDoctor(res.data);
  }

  async function deleteDoctor(){
      let api=`https://doc-back-v2nv.onrender.com/doctors/${doctor.id}`
      let res=await axios.delete(api);
      console.log(res);
      navigate("/")

  }

  function editDoctor(){
    navigate(`/editDoctor/${doctor.id}`)
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
        <button onClick={deleteDoctor}>Delete</button>
        <button onClick={editDoctor}>Edit</button>
    </div>
  )
}

export default ViewDetails
