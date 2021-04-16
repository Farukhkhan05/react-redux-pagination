import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { fetchPagination, DeleteData } from "../actions/fetchPagination";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@material-ui/lab/Pagination";
import EditUserForm from '../components/EditUserForm'

const ShowTablePagination = () => {
  const dispatch = useDispatch();

  //set data in an Array to check showPagination
  const [data, setData] = useState([]);

  //to hide and show edit form
  const [editShow, setEditShow] = useState(false)

  // to edit data
  const [propsdata, setpropsdata] = useState(
    {
      name:"",
      country:"",
      logo: "",
      slogan: "",
    })

  const showPagination = useSelector(
    (state) => state.paginationReducer.paginationData.data
  );
  const showPages = useSelector(
    (state) => state.paginationReducer.totalPages
  );
  console.log("showPages", showPages);
  console.log("showpagination", showPagination);

  useEffect(() => {
    dispatch(fetchPagination());
  }, []);

  useEffect(() => {
    if (showPagination) {
      setData(showPagination);
    } else {
      setData([]);
    }
  }, [showPagination]);

  return (
    <>
      {editShow ? null : <div>
        <Table className="striped bordered hover">
          <thead>
            <tr>
              <th>NAME</th>
              <th>COUNTRY</th>
              <th>LOGO</th>
              <th>SLOGAN</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((i) => {
              return (
                <tr key={i._id}>
                  <td>{i.name}</td>
                  <td>{i.airline.country}</td>
                  <td>
                    <a href={`https://${i.airline.website}`} target="#"><img src={i.airline.logo} /></a>
                  </td>
                  <td>{i.airline.slogan}</td>
                  <td><button className="btn btn-warning" onClick={()=>{
                    setEditShow(true)
                    propsdata.name= i.name;
                    propsdata.country = i.airline.country;
                    propsdata.slogan = i.airline.slogan
                  }}>EDIT</button></td>
                  <td><button className="btn btn-danger" onClick={() => { dispatch(DeleteData(i._id)) }}>DELETE</button></td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Pagination
          count={showPages}
          variant="outlined"
          color="secondary"
          onChange={(e, i) => {
            dispatch(fetchPagination(i));
          }}
        />
      </div>
      }
      { editShow ? <EditUserForm data={propsdata} setEditShow={setEditShow}/> : null }
    </>
  
  );
};

export default ShowTablePagination;
