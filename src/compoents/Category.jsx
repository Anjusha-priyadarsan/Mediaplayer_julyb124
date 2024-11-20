import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, deleteVideo, getAllCategory, getSingleVideo, updateCategory } from '../services/allAPI';

import VideoCard from './VideoCard'




function Category({ setVideoDeleteResponseFromCategory, deleteVideoFromViewResponse }) {

  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("")
  const [allCategory, setAllCategory] = useState([])
  console.log(categoryName);
  console.log(allCategory);



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {

    getCategory()
  }, [deleteVideoFromViewResponse])


  const handleAddCategory = async () => {
    if (categoryName) {
      try {
        const result = await addCategory({ categoryName, allVideos: [] })
        console.log(result);
        setCategoryName("")

        handleClose()
        getCategory()


      }
      catch (err) {
        console.log(err);

      }
    }
    else {
      toast.warning("enter the category name")

    }
  }

  const getCategory = async () => {

    try {
      const result = await getAllCategory()
      setAllCategory(result.data)


    }
    catch (err) {
      console.log(err);

    }

  }

  const delCategory = async (categoryId) => {

    try {

      await deleteCategory(categoryId)
      getCategory()



    }
    catch (err) {
      console.log(err);

    }

  }

  const videoDropped = async (e, categoryId) => {

    console.log(`video dropped in category id ${categoryId}`);

    const videoId = e.dataTransfer.getData("videoId")
    console.log(`drag started with video id:${videoId} and dropped in category id :${categoryId}`);

    const { data } = await getSingleVideo(videoId)
    console.log(data);

    const selectedCategory = allCategory.find(item => item.id == categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);

    await updateCategory(categoryId, selectedCategory)
    getCategory()

    const result = await deleteVideo(videoId)
    setVideoDeleteResponseFromCategory(result.data)


  }
  const drgOverStart = (e) => {

    e.preventDefault()

  }

  const dragStatrted = (e, videoDetails, categoryId) => {

    const shareData = { videoDetails, categoryId }
    console.log(shareData);
    e.dataTransfer.setData("shareData",JSON.stringify(shareData))



  }



  return (
    <>
      <div className='d-flex justify-content-around'>
        <h3 className='text-info'>All Category</h3>
        <button onClick={handleShow} className='ms-3 btn btn-warning  fs-5 fw-bold rounded-circle'>+</button>

      </div>

      <div className='container-fluid mt-3'>
        {
          allCategory.length > 0 ?

            allCategory?.map(category => (

              <div droppable={true} onDragOver={(e) => drgOverStart(e)} onDrop={(e) => videoDropped(e, category.id)} className='border border-light border-3 rounded p-3 mb-3'>
                <div className="d-flex justify-content-between">
                  <h6>{category.categoryName}</h6>
                  <button onClick={() => delCategory(category.id)} className='btn' ><i class="fa-solid fa-trash" style={{ color: 'red' }}> </i></button>

                </div>
                <div className='row mt-3'>
                  {
                    category.allVideos.length > 0 &&

                    category.allVideos.map(video => (

                      <div draggable={true}   droppable={true} onDragStart={e => dragStatrted(e, video, category.id)} onDragOver={e => dragOverSyatred(e)} className='col-lg-6'>
                        <VideoCard displayData={video} insideCategory={true} />

                      </div>

                    ))

                  }

                </div>

              </div>


            ))

            :
            <div className='text-danger fw-bold fs-3'>Category not added yet</div>
        }
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='border border-3 border-info p-3 rounded'>
            <FloatingLabel controlId="categoryName" label="Category" className="mb-3">
              <Form.Control onChange={(e) => setCategoryName(e.target.value)} type="text" placeholder=" Category Name" />
            </FloatingLabel>


          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="info" onClick={handleAddCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />

    </>
  )
}

export default Category