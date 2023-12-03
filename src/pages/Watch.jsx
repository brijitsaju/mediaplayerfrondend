import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import { deleteVideoHistory, getAllHistory } from '../services/allAPI'

function Watch() {
  const [history, setHistory] = useState([])
  const allHistory = async () => {
    const { data } = await getAllHistory()
    console.log(data);
    setHistory(data)
  }
  console.log(history);
  const removeHistory= async(id)=>{
    await deleteVideoHistory(id)
    allHistory()
  }

  useEffect(() => {
    allHistory()
  }, [])
  return (
    <>
      <div className="container">
        <div className="heading d-flex justify-content-space-between">
          <h3 style={{ marginTop: "60px", marginLeft: '100px' }}>WatchHistory</h3>
          <Link to={"/home"} style={{ marginLeft: '700px', marginTop: '70px', textDecoration: "none", color: "white" }}><i class="fa-solid fa-arrow-left" style={{ color: "white" }}></i>Back to Home</Link>
        </div>
        <div style={{ marginTop: "40px" }}>
          <Table striped >
            <thead>
              <tr>
                <th>#</th>
                <th>Caption</th>
                <th>URL</th>
                <th>Timestamp</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {history.length > 0 ?
              history.map((item,index)=>(<tr>
                <td>{index+1}</td>
                <td>{item.caption}</td>
                <td><a href={`${item.youtube}?autoplay=1`} target='_blank'>{item.youtube}</a></td>
                <td>{item.timestamp}</td>
                <td><button onClick={()=>removeHistory(item?.id)} type="button" class="btn btn-danger ms-5"><i class="fa-solid fa-trash-can"></i></button></td>
              </tr>
              ))

              
              :
              <p className='mt-5 fw-bolder fs-4 text-danger'>no watch history</p>
  }

            </tbody>
          </Table>
        </div>

      </div>

    </>
  )
}

export default Watch
