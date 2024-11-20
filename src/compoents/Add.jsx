import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addVideo } from '../services/allAPI';





function Add({setAddVideoResponse}) {

  const [videoDetails, setVideoDetails] = useState({ caption: "", imageURL: "", utubeURL: "" })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isInvalidUrl, setIsInvalidUrl] = useState(false)
  console.log(videoDetails);

  const getEmbedurl = (link) => {

    if (link.includes('v=')) {

      let videoId = link.split('v=')[1].slice(0, 11)
      console.log(videoId);
      setVideoDetails({ ...videoDetails, utubeURL: `https://www.youtube.com/embed/${videoId}` })
      setIsInvalidUrl(false)
     

    }
    else {

      setVideoDetails({ ...videoDetails, utubeURL: "" })
      setIsInvalidUrl(true)


    }



  }
  const handleUpload = async() => {

    const { caption, imageURL, utubeURL } = videoDetails

    if (caption && imageURL && utubeURL) {

      // api call

      try{

      const  result=await addVideo(videoDetails)
       console.log(result);
       setAddVideoResponse(result.data)

        toast.success(`${result.data.caption} is  added to your collection`)
       handleClose()
       setVideoDetails({ caption: "", imageURL: "", utubeURL: "" })

       

      }
      catch(err){
        console.log(err);
        

      }




    }
    else {
      toast.warning("enter the field completely")
    }




  }

  return (
    <>

      <div className="d-flex align-items-center">
        <h5 className='text-warning fw-bold'>Upload New Video</h5>
        <button onClick={handleShow} className='ms-3 btn btn-warning  fs-5 fw-bold rounded-circle'>+</button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Video Details!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>please fill the following details</p>
          <div className="border border-3 border-info p-3 rounded">

            {/* video caption */}
            <FloatingLabel controlId="floatingInputcaption" label="Video Caption" className="mb-3">
              <Form.Control onChange={e => setVideoDetails({ ...videoDetails, caption: e.target.value })} type="text" placeholder="video caption" />
            </FloatingLabel>

            {/* image url */}

            <FloatingLabel controlId="floatingInputimage" label="Image Url" className="mb-3">
              <Form.Control onChange={e => setVideoDetails({ ...videoDetails, imageURL: e.target.value })} type="text" placeholder="Image Url" />
            </FloatingLabel>

            {/* utube url */}

            <FloatingLabel controlId="floatingInputurl" label="Youtube Url" className="mb-3">
              <Form.Control onChange={e => getEmbedurl(e.target.value)} type="text" placeholder="Youtube Url" />
            </FloatingLabel>
            {
              isInvalidUrl && <div className='text-danger fw-bold'>Invalid Video Url</div>

            }



          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>



  


    </>
  )
}

export default Add