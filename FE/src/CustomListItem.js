import React from 'react';
import { MDBListGroupItem } from 'mdb-react-ui-kit';
import "./markattend.css";
const CustomListItem = ({ label, value }) => (
  <MDBListGroupItem className="custom-list-item">
    <strong>{label}: </strong>{value}
  </MDBListGroupItem>
);

export default CustomListItem;
