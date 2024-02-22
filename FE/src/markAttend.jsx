import React,{useEffect, useState} from 'react'
import './markattend.css'
import { useNavigate } from 'react-router-dom';
const MarkAttend = () => {
    const navigate=useNavigate();
    const [enroll,setEnroll] =useState();
    const markPresent= async (e)=>{
        e.preventDefault();
        if(enroll==""){alert("enter enrollID");return;}
        const resp=await fetch("https://attendance-marker-backend.onrender.com/api/user/markAttendance",{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            uniqueID:"CDRC-"+enroll
        })
        });
        if(resp.status==200){
            alert("Attendance Marked!!")
        }
        else if(resp.status==404){
            alert("User Not Found!")
        }
        else{
           alert("something went wrong") 
        }
        
    }
  return (
    <div id="container">
        <div id="attendancebox">
      
        <form id="attendanceForm" onSubmit={(e)=>markPresent(e)}>
        <h1 className='some'>Attendance Marker</h1>
            <input type="text" name="name" id="nameInput" placeholder="Enter Unique ID" onChange={(e)=>setEnroll(e.target.value)}></input>
          <div className="btns">
            <button type="submit">Mark</button>
            <button type="submit" onClick={()=>navigate('/')}>Home</button></div>

        </form>
  
        </div>
          </div>
  )
}

export default MarkAttend