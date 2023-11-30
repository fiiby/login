
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap';

const AllStudent = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch students from the server when the component is mounted:
    axios.get('http://localhost:4000/Student')
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching students', error);
      });
  }, []);

  return (
    <div className="container1">
      <h2 className="header">Students List</h2>
      <div className="underline"></div>
      <Table striped bordered hover>
        <thead className="tbl-head">
          <tr>
            <th className="head">First Name</th>
            <th className="head">Last Name</th>
            <th className="head">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr className="tbl-row" key={student._id}>
              <td className="input-row">{student.firstName}</td>
              <td className="input-row">{student.lastName}</td>
            

                <div className="btn-div">
             <Link to = {`/Update/${student._id}`}><button  type="submit" className="btn-1">Update</button>
              </Link>
                <Link to = {`/Delete/${student._id}`}><button type="submit" className="btn-1">Delete</button> </Link>
              
                <Link to = {`/Details/${student._id}`}><button type="submit" className="btn-1">Details</button> </Link>
               </div>
            </tr>
          ))} 
        </tbody>
      </Table>
    </div>
  );
};

export default AllStudent;
