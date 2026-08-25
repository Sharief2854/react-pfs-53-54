import axios from 'axios';
import React, { useState } from 'react'

function AddDoctor() {
    const[name,setname]=useState("");
    const[number,setNumber]=useState(0);
    const[gender,setGender]=useState("");
    const[specialization,setSpecialization]=useState("");
    const[salary,setSalary]=useState(0);

    async function add(event){
      event.preventDefault();
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

      let api="https://doc-back-v2nv.onrender.com/doctors"
      let res=await axios.post(api,doctorObj);
      console.log(res);

      // console.log(doctorObj);
    }



    

  return (
    <div>
        <form onSubmit={add}>
          Name:
          <input type="text" onChange={(event)=>setname(event.target.value)}/> 

          <br />


          Numbmer:
          <input type="number" onChange={(event)=>setNumber(event.target.value)}/> <br />

          Gender:
          <select onChange={(event)=>setGender(event.target.value)}>
            <option value="">select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select> <br />

          Specialization:
          <input type="text" onChange={(event)=>setSpecialization(event.target.value)}/> <br />

          Salary:
          <input type="number"  onChange={(event)=>setSalary(event.target.value)}/> <br />

          <input type="submit" value="add Doctor"/>
        </form>
    </div>
  )
}

export default AddDoctor
