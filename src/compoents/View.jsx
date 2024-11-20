import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { addVideo, getAllVideos, getSingleCategory, updateCategory } from '../services/allAPI'








function View({addVideoResponse,videoDeleteResponseFromCategory,setDeleteVideoFromViewResponse}) {
  const [allVideos, setAllVideos] = useState([])
  
  const [deleteResponse,setDeleteResponse]=useState("")
  useEffect(() => {

    getallVideo()

  }, [addVideoResponse,deleteResponse,videoDeleteResponseFromCategory])
  console.log(allVideos);
  


  const getallVideo = async () => {
    try {
      const result = await getAllVideos()
      console.log(result);

      if (result.status >= 200 && result.status < 300) {
        setAllVideos(result.data)
      }

    }
    catch (err) {
      console.log(err);

    }
  }

  const dragOverView=(e)=>{
      e.preventDefault()
  }

  const handleCtaegoryVideo=async(e)=>{
    const {videoDetails,categoryId}=JSON.parse(e.dataTransfer.getData("shareData"))
    console.log(videoDetails,categoryId);

    try{

      const {data}=await getSingleCategory(categoryId)
      console.log(data);
      console.log(data.allVideos);
      

      const selectedCategoryVideoList=data.allVideos.filter(video=>video.id!=videoDetails.id)
      console.log(selectedCategoryVideoList);

      const {id,categoryName}=data

      const categoryResult=await updateCategory(categoryId,{id,categoryName,allVideos:selectedCategoryVideoList})
      setDeleteVideoFromViewResponse(categoryResult.data)
      await addVideo(videoDetails)
      getallVideo()
      

    }
    catch(err)
    {
      console.log(err);
      
    }


    
  }




  return (
    <>
      <Row className='' droppable={true} onDragOver={(e)=>dragOverView(e)} onDrop={(e)=>handleCtaegoryVideo(e)}>


        {
          allVideos.length > 0 ?

            allVideos?.map(video => (
              <Col key={video?.id} lg={4} md={6} sm={12}>

                <VideoCard  displayData={video} setDeleteResponse={setDeleteResponse}/>


              </Col>
            ))
            :
            <div className='text-danger fw-bold fs-3'>Nothing to display</div>
        }

      </Row>












    </>
  )
}

export default View