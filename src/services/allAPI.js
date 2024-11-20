import commonAPI from "./commonAPI"
import SERVER_URL from "./server_url"




// save video
// save video api called by add.jsx

 export const addVideo=async(video)=>{

  return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)
}


// api call for get all videos

export const getAllVideos=async()=>{
 return await  commonAPI("GET",`${SERVER_URL}/allVideos`,"")
}

// api call for delete video card

export const deleteVideo=async(videoId)=>{
  return await  commonAPI("DELETE",`${SERVER_URL}/allVideos/${videoId}`,{})
 }

//  save history api call

export const saveHistory=async(video)=>{

  return await commonAPI("POST",`${SERVER_URL}/history`,video)
}

// get history api call

export const getAllHistory=async()=>{
  return await  commonAPI("GET",`${SERVER_URL}/history`,"")
 }

//  delete history

export const deleteHistory=async(videoId)=>{
  return await  commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})
 }

 //  add category api call

export const addCategory=async(catrgoryDetails)=>{

  return await commonAPI("POST",`${SERVER_URL}/allcategory`,catrgoryDetails)
}

// get all category

export const getAllCategory=async()=>{
  return await  commonAPI("GET",`${SERVER_URL}/allcategory`,"")
 }

 //  delete category

 export const deleteCategory=async(categoryId)=>{
  return await  commonAPI("DELETE",`${SERVER_URL}/allcategory/${categoryId}`,{})
 }

//  api call for getting single video

export const getSingleVideo=async(videoId)=>{
  return await commonAPI("GET",`${SERVER_URL}/allVideos/${videoId}`,"")
}

// api call for updating category

export const updateCategory=async(categoryId,catrgoryDetails)=>{
  return await  commonAPI("PUT",`${SERVER_URL}/allcategory/${categoryId}`,catrgoryDetails)
 }

//  api call for getting single category

export const getSingleCategory=async(categoryId)=>{
  return await commonAPI("GET",`${SERVER_URL}/allcategory/${categoryId}`,"")
}








