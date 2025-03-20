import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './App.css';

export default function CrudTable(data) {

    const[tableData,settableData]=useState(null);
     const deleteUser = (id) => {
          fetch(`https://67d7ed559d5e3a10152c9eb3.mockapi.io/employeedata/DetailsOfEmployee/${id}`, {
          method: 'DELETE',
          }).then(res => {
              if (res.ok) {
                    return res.json();
          }
              
          }).then(task => {
            alert("Deleted Sucessfully....!");
            data.setUpdate(!data.update);
              
          }).catch(error => {
            console.log("error")
              
          })
}
    useEffect(()=>{
        fetch('https://67d7ed559d5e3a10152c9eb3.mockapi.io/employeedata/DetailsOfEmployee/', {
            method: 'GET',
            headers: {'content-type':'application/json'},
          }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
          }).then(tasks => {
            settableData(tasks.reverse());
            
          }).catch(error => {
            console.log(error);
            
          })
    },[data.update])

        console.log(tableData);

      
      
      return (
      <>
      <Button variant={"info"} className="fs-5 mb-3 mt-3" onClick={() => data.popclick()}> Add Data</Button>
      <Table striped bordered hover  variant="dark">
        <thead>
          <tr>
            <th className="fs-4">S.No</th>
            <th className="fs-4">Name</th>
            <th className="fs-4">Email Id</th>
            <th className="fs-4">Pnone No</th>
            <th className="fs-4">Qualification</th>
            <th className="fs-4">Location</th>
            <th className="fs-4">Action</th>
          </tr>
        </thead>
        <tbody>
            {tableData&&tableData.map((item,out)=>{
                return (
                    <>
                        <tr>
                        <td >{out+1}</td>
                        <td >{item.Name}</td>
                        <td >{item.EmailId}</td>
                        <td >{item.PhoneNo}</td>
                        <td >{item.Qualification}</td>
                        <td >{item.Location}</td>
                        <td >
                                     <Button onClick={()=>data.popclick(item)} variant="success me-3" >EDIT</Button>
                                     <Button variant="danger" onClick={() => deleteUser(item.id)}>DELETE</Button></td>
                        </tr>
                    </>
                )
            })}
        </tbody>
      </Table>
      </>
    );
  }
   