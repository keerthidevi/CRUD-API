
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function Popup(data) {

  console.log(data.dataTemp);

  const updateData = () => {
    
      fetch(`https://67d7ed559d5e3a10152c9eb3.mockapi.io/employeedata/DetailsOfEmployee/${data.dataTemp.id}`, {
          method: 'PUT', // or PATCH
          headers: {'content-type':'application/json'},
          body: JSON.stringify(data.dataTemp)
      }).then(res => {
         if (res.ok) {
         return res.json();
        }

         // handle error
      }).then(task => {
        alert("Successs...!");
        data.setRef(!data.ref);
      }).catch(error => {
         console.log(error)

      })

      data.popclose();
  }

      
      const createUser=()=>{
              
              
              fetch('https://67d7ed559d5e3a10152c9eb3.mockapi.io/employeedata/DetailsOfEmployee', {
                method: 'POST',
                headers: {'content-type':'application/json'},
                // Send your data in the request body as JSON
                body: JSON.stringify(data.dataTemp)
              }).then(res => {
                if (res.ok) {
                    return res.json();
                }
                // handle error
              }).then(task => {
                // do something with the new task
                alert("Created Sucessfully");
                data.setRef(!data.ref)
              }).catch(error => {
                // handle error
              })

              data.popclose();
            }
  
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={data.popshow} onHide={data.popclose}>
        <Modal.Header closeButton>
          <Modal.Title> {data.dataTemp.id ?"Edit Data " : "Add Data " } </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Keerthana"
                autoFocus
                defaultValue={data.dataTemp.Name}
                onChange={(e)=> data.setdataTemp({...data.dataTemp, Name: e.target.value})}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                defaultValue={data.dataTemp.EmailId}
                onChange={(e)=> data.setdataTemp({...data.dataTemp, EmailId: e.target.value})}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="9876432210"
                autoFocus
                defaultValue={data.dataTemp.PhoneNo}
                onChange={(e)=> data.setdataTemp({...data.dataTemp, PhoneNo: e.target.value})}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Qualification</Form.Label>
              <Form.Control
                type="text"
                placeholder="BE CSE"
                autoFocus
                defaultValue={data.dataTemp.Qualification}
                onChange={(e)=> data.setdataTemp({...data.dataTemp, Qualification: e.target.value})}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="chennai"
                autoFocus
                defaultValue={data.dataTemp.Location}
                onChange={(e)=> data.setdataTemp({...data.dataTemp, Location: e.target.value})}
              />
            </Form.Group>

            
            {/* <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={data.popclose}>
            Close
          </Button>
          {data.dataTemp.id ?  <Button variant="primary" onClick={updateData}> Save Change </Button> : 
          <Button variant='success' onClick={createUser} > Create</Button> }
        </Modal.Footer>
      </Modal>
    </>
  );
}

 