
import { serverURL } from "./serverURL"
import { commonAPI } from "./commonAPI"


// upload video
export const uploadVideo= async(reqBody)=>{
    // return the response to Add.jsx component
    return await commonAPI('POST',`${serverURL}/video`,reqBody)
}

// get all upload videos
export  const getAllVideos =async()=>{
    return await commonAPI('GET',`${serverURL}/video`,'')
 }

//  to delete a video
 export  const deleteAVideo =async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/video/${id}`,{})
 }

 //api to add history
 export  const addToHistory =async(videoDetails)=>{
    return await commonAPI('POST',`${serverURL}/history/`,videoDetails)
 }

//  api to get history from json server
export  const getAllHistory =async()=>{
   return await commonAPI('GET',`${serverURL}/history/`,'')
}

//  call to deiete history
export  const deleteVideoHistory =async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}
// api to add category to json-server
export  const addAllCategory =async(body)=>{
   return await commonAPI('POST',`${serverURL}/category/`,body)
}


// api to get all categories froom json server
export  const getAllCategories =async()=>{
   return await commonAPI('GET',`${serverURL}/category/`,"")
}

// api to delete categoires from json server
export  const Deletecategory =async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/category/${id}`,"")
}


// api to get particular video from http://localhost:5000/video
export  const getAVideo =async(id)=>{
   return await commonAPI('GET',`${serverURL}/video/${id}`,"")
}
// api to update the ctegory with new video
export  const updateCategory  =async(id,body)=>{
   return await commonAPI('PUT',`${serverURL}/category/${id}`,body)
}

// api to delete categoires from json server
export  const Deletecategorylist =async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/category/${id}`,"")
}
