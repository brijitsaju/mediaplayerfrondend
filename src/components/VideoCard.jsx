import React from 'react'
import { Card } from 'react-bootstrap'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteAVideo, deleteVideos } from '../services/allAPI';


function VideoCard({displayVideo,setDeleteVideoStatus,ispresent,removeCVideo}) {

  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = async() =>{ setShow(true)

    const {caption,youtube}=displayVideo
    let today =new Date()
    console.log(today);

    let timestamp= new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(today);
    console.log(timestamp)
    ;

    let videoDetails={
      caption,youtube,timestamp
    }
    await addToHistory(videoDetails)
  }
  

    const removeVideo= async(id)=>{
      const response= await deleteAVideo(id)
      setDeleteVideoStatus(true)

    }

    // function to drag the videocard
    const cardDrag =(e,id)=>{
      console.log(`The Id of the videocard dragged is ${id}`);
      e.dataTransfer.setData('videoId',id)
      
    }


  return (
    <>
      <div className='mt-3' >
        <Card style={{ width: '15rem', marginRight:"100px", height:"300px"}} className="justify-space-between " draggable onDragStart={(e)=>cardDrag(e,displayVideo?.id)} >
      <Card.Img variant="top" onClick={handleShow} src={displayVideo.image_url} style={{height:"350px"}} />
      <Card.Body className='d-flex justify-space-between'>
        <Card.Title className='mt-3'>{displayVideo.caption}</Card.Title>
       {!ispresent?
        <button onClick={()=>removeVideo(displayVideo?.id)} type="button" class="btn btn-danger ms-5"><i class="fa-solid fa-trash-can"></i></button>:
        <button onClick={removeCVideo} style={{float:'right'}} className='btn btn-warning  '><i class="fa-solid fa-trash"></i></button>

        }
      </Card.Body>
    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="480" height="391" src={`${displayVideo.youtube}?autoplay=1`} title="Gojo&#39;s Second Domain Expansion | Jujutsu Kaisen Season 2 Episode 9 | 4K 60FPS | Eng Sub" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>

    </div>

    </>
  )
}

export default VideoCard
