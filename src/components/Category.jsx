import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Col, Form,Row } from 'react-bootstrap';
import { Deletecategory, addAllCategory, getAVideo, getAllCategories, updateCategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deletecategory } from '../services/allAPI';




import VideoCard from './VideoCard';

function Category() {


  const [categoryName, setcategoryName] = useState("")
  const [category, setCategory] = useState([])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  // function to add category
  const addCategory = async () => {
    if (categoryName) {
      let body = {
        categoryName,
        allvideo: []
      }
      const response = await addAllCategory(body)
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        toast.success('category added sucessfuly')

        // state value is made null
        setcategoryName("")
        // close the model
        handleClose()
        allCategory()
      }
      else {
        toast.error('something went wrong ')
      }

    }
    else {
      toast.warning('please enter the category name')
    }
  }
  // fun to get all categories
  const allCategory = async () => {
    const { data } = await getAllCategories()
    // console.log(data);
    setCategory(data)
  }
  // functio to delete category

  const deletecategory = async (id) => {
    await Deletecategory(id)
    // to get remaining vategories
    allCategory()
  }
  // function to prevent reload so that the data that we send wont lost
  const dragOver = (e) => {
    e.preventDefault()
  }

  const videoDrop =async (e, categoryId) => {
    console.log('dropprd on the category Id :', categoryId);
    //  to get the data send from videocard
    let videoId = e.dataTransfer.getData("videoID")
    console.log(videoId);
   const {data}= await getAVideo(videoId)
   console.log(data);
    const selectedCategory=category.find(item=>item.id===categoryId)
    selectedCategory.allvideo.push(data)
    console.log(selectedCategory);

    await updateCategory(categoryId,selectedCategory)
    allCategory()



  }
  // to delete a singel category details
  const removeCVideo = async(cid,categoryID)=>{
    console.log(cid,'img');
    console.log(categoryID,'cst');
    const A = category.map(item=>item)
    console.log(A);
    const cname = A[categoryID-1]
    console.log(cname);
    console.log(cname.allvideo);
    console.log(cname.allvideo.splice(cid,1));
    console.log(cname);
    await updateCategory(categoryID,cname)
    allCategory()
     }

  
  useEffect(() => {
    allCategory()
  }, [])
  console.log(category);

  return (
    <div>

      <div className="container">
        <button onClick={handleShow} style={{ backgroundColor: "orange", color: "white", width: "300px", height: "50px", borderRadius: "10px", fontSize: "20px", }} >Add new Category</button>
      </div>
      {category?.length > 0 ?
        category?.map((item) => (<div style={{width:"300px"}}  className='m-3 border border-secondary p-4 ps-4 rounded'>
          <div className=' ' droppable onDragOver={(e) => dragOver(e)} onDrop={(e)=>videoDrop(e, item?.id)}>
            <h6>{item.categoryName}</h6>
            <Button onClick={() => deletecategory(item?.id)} className='btn btn-danger '><i class="fa-solid fa-trash "></i></Button>
            <Row>
              <Col>
              {            item?.allvideo?.length>0?
            item?.allvideo?.map((card,index)=>(<VideoCard displayVideo={card} ispresent='true' removeCVideo={(e)=>removeCVideo(index,item?.id)}/>)):
            <p>Nothing to display</p>

              }
              </Col>
            </Row>
          </div>

        </div>))
        :
        <p className='mt-3 fw-bolder fs-5 '>No Category Added</p>
      }

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
              <Form.Label>Category Name</Form.Label>

              <Form.Control onChange={(e) => setcategoryName(e.target.value)} type="text" placeholder="Enter Category Name" />
            </Form.Group>
           </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={addCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </div>

  )
}

export default Category
