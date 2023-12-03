import React, { Component, useState } from 'react'
import View from '../components/View'
import Add from '../components/Add'
import Category from '../components/Category'
import { Link } from 'react-router-dom'


function Home() {
  const [uploadVideoStatus,setUploadVideoStatus]=useState({})
    return (
    <>
      <div className=''>
        <div className='container d-flex' style={{ alignItems: "center ", justifyContent: "space-between" }}>
        
          <Add setUploadVideoStatus={setUploadVideoStatus} />
          
          <Link to={"/watch"} style={{ textDecoration: "none", color: "white", fontSize: "25px" }}>WatchHistory</Link>
        </div>
        <div className="div2 d-flex mt-5" >
       
          <View uploadVideoStatus={uploadVideoStatus} />


          

          <Category />
        </div>

      </div>
    </>
  )
}

export default Home
