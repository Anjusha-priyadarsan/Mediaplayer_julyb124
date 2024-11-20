import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteVideo, saveHistory } from '../services/allAPI';


function VideoCard({displayData,setDeleteResponse,insideCategory}) {
  console.log(displayData);
  


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async () =>{

    const {caption, utubeURL}=displayData

    const localTime=new Date()
    console.log(localTime);
    const formatedDate=localTime.toLocaleString();
    console.log(formatedDate);
    const historyData={caption,utubeURL,formatedDate}

    console.log(historyData);
    try{
      await saveHistory(historyData)
    }
    catch(err){
      console.log(err);
      
    }
    
    
    


    
    
    
    
    
    
    
    setShow(true)};


const handleRemoveVideo=async(videoId)=>{

  try{

    const result=await deleteVideo(videoId)
    setDeleteResponse(result.data)
    console.log(result);

    



  }
  catch(err){
    console.log(err);
    
  }

}

const dragStarted=(e,videoId)=>{

  console.log(`drag started vith video id : ${videoId}`);
  e.dataTransfer.setData("videoId",videoId)
  

}


  return (
    <>

      <Card draggable={true} onDragStart={(e)=>dragStarted(e,displayData.id)}  style={{width:'180px'}} className='mb-4' >
        <Card.Img onClick={handleShow} style={{height:'180px'}} variant="top" src={displayData?.imageURL} />
        <Card.Body>
          <Card.Title className='d-flex align-items-center justify-content-between'>

            <p>{displayData?.caption}</p>
{
  !insideCategory &&
              <button onClick={()=>handleRemoveVideo(displayData?.id)} className='btn'><i class="fa-solid fa-trash"  style={{color:'red',fontSize:'20px'}}></i></button>

}            
          </Card.Title>
         
         
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       
        <iframe className='w-100' height="377" src={`${displayData?.utubeURL}?autoplay=1`} title="Illuminati|Aavesham|Jithu Madhavan|Fahadh Faasil|Sushin Shyam,Dabzee,Vinayak| Nazriya|Anwar Rasheed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

       
          


        </Modal.Body>
        
      </Modal>




    </>
  )
}

export default VideoCard