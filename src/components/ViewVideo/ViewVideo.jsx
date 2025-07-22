import React, { useEffect, useState } from 'react'
import VideoCard from '../VideoCard/VideoCard'
import { getVideoAPI } from '../../../services/allAPI'

function ViewVideo() {
  const [videoRes,setvideoRes]=useState([])
  const handleVideo=async()=>{
    const response=await getVideoAPI();
    console.log(response); 
    setvideoRes(response.data)

  }
  console.log(videoRes);//array is assined
  
  useEffect(()=>{
    handleVideo()
  },[])
  
  return (
    <div>
      <div className="row">
        <div className="col">
        <VideoCard videoRes={videoRes}/>
        </div>
      </div>
    </div>
  )
}

export default ViewVideo