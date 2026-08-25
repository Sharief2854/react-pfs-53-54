import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditDoctor() {
    const[name,setname]=useState("");
    const[number,setNumber]=useState(0);
    const[gender,setGender]=useState("");
    const[specialization,setSpecialization]=useState("");
    const[salary,setSalary]=useState(0);
    const[loading,setLoading]=useState(false);

    let navigate=useNavigate();
    let params=useParams();

    async function update(event){
      event.preventDefault();
      setLoading(true);
      // validations
      if(name=="" || number=="" || gender=="" || specialization=="" || salary==""){
        alert("please fill all details");
        return;
      }
      // regex for number
      let numberRegex=/^[6-9][0-9]{9}$/;
      let result=numberRegex.test(number);
      if(result==false){
        alert("please check you number");
        return;
      }

      let doctorObj={
        name:name,
        number:number,
        gender:gender,
        specialization:specialization,
        salary:salary
      }

      try{
        let api=`https://doc-back-v2nv.onrender.com/doctors/${params.id}`
        let res=await axios.put(api,doctorObj);
        console.log(res);
        alert("updated successfully....");
        navigate(-1);

      }
      catch(err){
          alert("something went wrong try again!!")
      }
      finally{
        setLoading(false);
      }
    }

    async function getData(){
      let res=await axios.get(`https://doc-back-v2nv.onrender.com/doctors/${params.id}`)
      let doctor=res.data;
      console.log(doctor);
      setname(doctor.name);
      setNumber(doctor.number);
      setGender(doctor.gender);
      setSpecialization(doctor.specialization);
      setSalary(doctor.salary);
    }



    
    useEffect(()=>{
        getData();
    },[])
  return (
    <div>
        <form onSubmit={update}>
          Name:
          <input type="text" onChange={(event)=>setname(event.target.value)} value={name}/> 

          <br />


          Numbmer:
          <input type="number" onChange={(event)=>setNumber(event.target.value)} value={number}/> <br />

          Gender:
          <select onChange={(event)=>setGender(event.target.value)} value={gender}>
            <option value="">select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select> <br />

          Specialization:
          <input type="text" onChange={(event)=>setSpecialization(event.target.value)} value={specialization}/> <br />

          Salary:
          <input type="number"  onChange={(event)=>setSalary(event.target.value)} value={salary}/> <br />

          <button type='submit'>
              {loading==true?"Loading.....":"update"}
          </button>
        </form>
    </div>
  )
}

export default EditDoctor
