import React, { useState } from "react";
import { TextField, FormControl, Button } from "@material-ui/core";
import {UpdateData} from "../actions/fetchPagination";
import {useDispatch} from 'react-redux'

const EditUserForm = (props) => {
  const dispatch = useDispatch()
  const [Editdata, setEditdata] = useState({
    name: "",
    country: "",
    slogan: "",
  });

  console.log(props,"props");

  const handleChange = (event) => {
    
    const {name, value} = event.target;
    setEditdata({...Editdata, [name] : value})
    // {
    //   event.target.name === "name" ? (Editdata.name = event.target.value) : event.target.name === "country"
    //     ? (Editdata.country = event.target.value)
    //     : event.target.name === "logo"
    //     ? (Editdata.logo = event.target.value)
    //     : (Editdata.slogan = event.target.value);
    // }
    console.log(Editdata);
  };
  return (
    <div className="form">
      <h1>EDIT USER</h1>
      <label>NAME:</label><br></br>
      <input type="text" name="name" value={Editdata.name} placeholder={props.data.name} onChange={handleChange} /><br></br>
      <label>COUNTRY:</label><br></br>
      <input type="text" name="country" value={Editdata.country} placeholder={props.data.country} onChange={handleChange} /><br></br>
      <label>SLOGAN:</label><br></br>
      <input type="text" name="slogan" value={Editdata.slogan} placeholder={props.data.slogan} onChange={handleChange} /><br></br>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          props.setEditShow(false);
          dispatch(UpdateData())
        }}
      >
        UPDATE
      </Button>
    </div>
  );
};

export default EditUserForm;
