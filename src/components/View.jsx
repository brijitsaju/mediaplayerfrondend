import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/allAPI'

function View({uploadVideoStatus}) { 
  const [allVideo,setAllVideo]=useState([])

  const [deleteVideoStatus,setDeleteVideoStatus]=useState(false)
  const getAllUploadedVideo = async () => {
    const response = await getAllVideos()
    // console.log(response);
    const {data} = response
    console.log(data);
    setAllVideo(data);
  }
   
  console.log(allVideo);

  useEffect(() => {
    getAllUploadedVideo()
    setDeleteVideoStatus(false)
  }, [uploadVideoStatus,deleteVideoStatus])
  return (
    <div className='ms-2'>
    <h3>All Videos</h3>
    <Row>
       { allVideo?.length>0?

       allVideo?.map((video)=>( <Col sm={12} md={6} lg={4} xl={4}> <VideoCard displayVideo={video} setDeleteVideoStatus={setDeleteVideoStatus}/></Col>
       ))
        : <p>nothing to display</p>
        }
      

    </Row>
</div>

  )
}

export default View
