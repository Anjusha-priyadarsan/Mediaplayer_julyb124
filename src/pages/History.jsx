import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../services/allAPI'






function History() {

  const[videoHistory,setVideoHistory]=useState([])
  console.log(videoHistory);
  

useEffect(() => {

  getHistory()
  
}, [])


  const getHistory=async()=>{

    try{
      const result=await getAllHistory()
      setVideoHistory(result.data)
    
      
      
    }
    catch (err){
      console.log(err);
      
    }

  }

  const delHistory=async(videoId)=>{

    try{
      await deleteHistory(videoId)
      getHistory()

    }
    catch(err){
      console.log(err);
      
    }

  }

  return (
    <>
    <div className="container my-5">
      <div className="d-flex justify-content-between">
        <h3 className='text-warning'>Watch History</h3>
        <Link className='text-info fw-bold fs-5' to={'/home'} style={{textDecoration:'none'}}>Back to <i className="fa-solid fa-house"></i></Link>
      </div>
      <table className='table mt-5'>

        <thead>
          <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Url</th>
          <th>Date and Time</th>
          <th><i className="fa-solid fa-ellipsis-vertical"></i></th>
          </tr>
        </thead>
        <tbody>
          {
            videoHistory.length>0?

            videoHistory?.map((item,index)=>(
              <tr key={item?.id}>
              <td>{index+1}</td>
              <td>{item?.caption}</td>
              <td><a href={item.utubeURL} target='_blank'>{item.utubeURL}</a></td>
              <td>{item.formatedDate}</td>
              <td><button onClick={()=>delHistory(item?.id)} className='btn'><i class="fa-solid fa-trash"  style={{color:'red'}}></i></button></td>
            </tr>
            ))


            :
            <div className='text-danger fw-bold fs-3'>Nothing to display</div>
          }
         
        </tbody>

      </table>
    </div>
    </>
  )
}

export default History