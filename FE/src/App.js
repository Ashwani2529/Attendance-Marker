import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import  "./App.css";
import { useNavigate } from "react-router-dom";
function App() {

  // Define state variables for form inputs
  const [name, setName] = useState("");
  const [uniqueID, setuniqueID] = useState("");
  const [designation, setDesignation] = useState("");
  const [authority, setAuthority] = useState("");
  const [region, setRegion] = useState("");
  const navigate=useNavigate();
  // function to reset the attendance
  const resetAttendance= async ()=>{
    const res=window.confirm("Are you sure you want to reset the attendance?");
    if(res){
      const resp=await fetch("https://attendance-marker-backend.onrender.com/api/user/resetAttendance",{
        method:"PATCH",
        headers:{
          "Content-Type":"application/json"
        }
      });
      const data=await resp.json();
     if(resp.ok===true){
        alert("Attendance reset successfully");
      }
      else{
        alert("Something went wrong!");
      }
    }

  }
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Log form inputs to the console
    if (
      name === "" ||
      uniqueID === "" ||
      designation === "" ||
      authority === ""  ||
      region === ""
    ) {
      alert("Please fill all the fields");
      return;
    }
    let enroll="SCDRC-"+uniqueID;
    const resp=await fetch("https://attendance-marker-backend.onrender.com/api/user/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        uniqueID:enroll,
        designation,
        authority,
        region
      })
    });
    const data=await resp.json();
    alert(data.msg);
    
  };

  return (
    <MDBContainer fluid className="back">
      <MDBRow className="d-flex justify-content-center align-items-center">
        <MDBCol id="signupbox" lg="5">
          <MDBCard className="my-5 rounded-3" style={{ maxWidth: "600px" }}>
            <MDBCardImage
              src="../wall.png"
              className="w-100 rounded-top"
              alt="Sample photo"
            />
            <MDBCardBody className="px-5">
              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                Registration Info
              </h3>
              {/* Update state on input change */}
              <MDBInput
                wrapperClass="mb-4"
                label="Name"
                id="nameInput"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Unique ID"
                id="uniqueIDInput"
                type="text"
                value={uniqueID}
                onChange={(e) => setuniqueID(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Designation"
                id="designationInput"
                type="text"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Authority"
                id="authorityInput"
                type="text"
                value={authority}
                onChange={(e) => setAuthority(e.target.value)}
              />
               <MDBInput
                wrapperClass="mb-4"
                label="Region"
                id="regionInput"
                type="text"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              />
              {/* Call handleSubmit function on button click */}
              <MDBBtn
                color="success"
                className="mb-4 me-4"
                size="lg"
                onClick={handleSubmit}
              >
                Submit
              </MDBBtn>
              <MDBBtn
                color="success"
                className="mb-4"
                size="lg"
                onClick={()=>navigate('/mark-attend')}
              >
                Mark Attendance
              </MDBBtn>
              <MDBBtn
                color="success"
                className="mb-4 me-4"
                size="lg"
                onClick={()=>navigate('/all-qrs')}
              >
                show all Qr-Codes
              </MDBBtn> 
              <MDBBtn
                color="success"
                className="mb-4"
                size="lg"
                onClick={resetAttendance}
              >
                Reset Attendance
              </MDBBtn> 
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
