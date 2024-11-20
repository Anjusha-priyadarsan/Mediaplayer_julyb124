import React, { useState } from 'react'
import Add from '../compoents/Add'
import { Link } from 'react-router-dom'
import View from '../compoents/View'
import Category from '../compoents/Category'





function Home() {
  const [addVideoResponse,setAddVideoResponse]=useState("")
  const [videoDeleteResponseFromCategory,setVideoDeleteResponseFromCategory]=useState("")
  const [deleteVideoFromViewResponse,setDeleteVideoFromViewResponse]=useState("")
  return (
    <>

    <div className="container d-flex justify-content-between my-5">

      <Add  setAddVideoResponse={setAddVideoResponse}/>
      <Link className='text-warning fw-bold fs-5' style={{textDecoration:'none'}} to={'/history'}>Watch History</Link>

    </div>

    <div className="row container m-5">

      <div className="col-lg-6">
        <h3 className='text-info'>All Videos</h3>

        <View setDeleteVideoFromViewResponse={setDeleteVideoFromViewResponse} addVideoResponse={addVideoResponse} videoDeleteResponseFromCategory={videoDeleteResponseFromCategory} />

      </div>
      <div className="col-lg-6">

      <Category deleteVideoFromViewResponse={deleteVideoFromViewResponse} setVideoDeleteResponseFromCategory={setVideoDeleteResponseFromCategory} />
      </div>

      

    </div>
    
    
    </>
  )
}

export default Home