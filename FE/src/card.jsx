import React,{useEffect, useState} from 'react';
import { MDBCard, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { useParams } from 'react-router-dom';
import CustomListItem from './CustomListItem';
export default function Card() {
  let {enroll}=useParams();
  const [data,setData] = useState();
  const getUser=async ()=>{
    // enroll=enroll.toUpperCase();
    const resp=await fetch(`https://attendance-marker-backend.onrender.com/api/user/getUser/${enroll.toUpperCase()}`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    });
    const data=await resp.json();
    setData(data);
  }
  useEffect(()=>{
    getUser();
  },[])
  return (
    <MDBCard style={{padding:"10%"}}>
      <img src="../wall.png"  alt="..." />
      <MDBListGroup flush style={{display:"grid",placeContent:"center",gridTemplateColumns:"1fr 1fr",borderRadius:"0",padding:"1.5%",margin:"1.5%"}}>
        {(data)?<>
        <CustomListItem label="Name" value={data.name} />
        <CustomListItem label="Region" value={data.region} />
        
    <CustomListItem label="Designation" value={data.designation} />
    <CustomListItem label="Unique ID" value={data.uniqueID} />
    <CustomListItem label="Authority" value={data.authority} />
    
    <CustomListItem label="Attendance" value={data.attendance} />
        </>
        :
        <h1>Loading...</h1>}
      </MDBListGroup>
    </MDBCard>
  );
}