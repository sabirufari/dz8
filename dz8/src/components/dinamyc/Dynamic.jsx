import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiGet } from "../../api";
import Post from "../post/Post";
import PostId from "./PostId";

const Dynamic = () => {
    const {id} =useParams()
    const [post,setPost] =useState([])
    useEffect(()=>{
        ApiGet.get(`${id}/comments`).then(resp=>setPost(resp.data))
    },[id])
    
    return (

    <>
    
        <h4>userID: {id}</h4>
        <div>
            {post.map(item=><Post key={item.id} item={item}/>)}
        </div>

    </>

     );
}
 
export default Dynamic;