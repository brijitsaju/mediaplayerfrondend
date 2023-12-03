import React, { useState } from 'react'
import View from './View'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Add({setUploadVideoStatus}) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[Videos,setVideos]=useState({
id:"",
caption:"",
image_url:"",
youtube:""

  })
  
  const embedVideoLink=(e)=>{
    const {value}=e.target
    console.log(value.slice(-11));
    const link=`https://www.youtube.com/embed/${value.slice(-11)}`
    setVideos({...Videos,youtube:link})
  }
  console.log(Videos);

  const handleUpload=async()=>{
const {id,caption,image_url,youtube}=Videos
if(!id||!caption||!image_url||!youtube){

toast.warning("please fill form completely")
}
else{
  const response =await uploadVideo(Videos)
  console.log(response);
  if(response.status>=200 && response.status<=300){
    setUploadVideoStatus(response.data)
   toast.success('uploaded sucessfuly')
    // close model
    handleClose()
  }
  else{
    console.log(response);
    toast.error('something went wrong try again')
  }
}
  }

  
    
  return (
    <>
      <div className='container'>
    <div  className="container d-flex mt-5 ">
      <h5>Upload New Video</h5>  
     <button onClick={handleShow} className="btn "><i class="fa-solid fa-cloud-arrow-up fa-bounce fs-4 "></i></button>
      
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-film text-warning me-2"></i>Upload video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <form className='border border-secondary p-3 rounded'>
         
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control  onChange={(e)=>{setVideos({...Videos,id:e.target.value})}} type="text" placeholder="Enter Video ID" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control  onChange={(e)=>{setVideos({...Videos,caption:e.target.value})}} type="text" placeholder="Enter video Caption" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={(e)=>{setVideos({...Videos,image_url:e.target.value})}} type="text" placeholder="Enter Video URL" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control  onChange={embedVideoLink} type="text" placeholder="Enter Youtube Video Link" />
         </Form.Group>


         </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>

   </div>
   <ToastContainer position='top-center' theme="colored" autoClose={2000}/>
    </>
  )
}

export default Add
