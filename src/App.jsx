import { useState } from 'react';
import './App.css'
import CrudTable from './table'
import Popup from './popup'

function App() {
  
  const [show, setShow] = useState(false);
  const [tempData, settempData] = useState({});
  const [status,setstatus] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (rowData) =>{
    if(rowData){
      settempData(rowData);
    }else{
      settempData({
        EmailId:null,
        Location:null,
        Name:null,
        PhoneNo:null,
        Qualification:null,
      })
    }
    setShow(true)};

  return (
    <>
      <Popup ref={status} setRef={setstatus} popshow={show} popclose={handleClose} dataTemp={tempData} setdataTemp={settempData}/>
      <CrudTable popclick={handleShow} update={status} setUpdate={setstatus} />
      
    </>
  )
}

export default App
