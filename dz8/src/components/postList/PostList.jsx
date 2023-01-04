import { useEffect, useState } from "react";
import { ApiGet } from "../../api";
import Input from "../inputs/Input";
import Post from "../post/Post";

const PostList = () => {
    const [post,setPost]=useState([])

    const [filtered,setFiltered]=useState([])

    useEffect(()=>{
        ApiGet.get().then(resp=>setPost(resp.data))
    },[])
    
    const handleChange=(e)=>{
        setFiltered(post.filter(item=>
        item.title.includes(e.target.value) 
        || item.body.includes(e.target.value) 
        || item.userId=== Number(e.target.value)
        ))
    }
    return ( 
        <>
            <Input  handleChange={handleChange}/>
            <div>
                
            {filtered.length===0
             ?
             post.map(item=><Post item={item} key={item.id}/>)
             :
             filtered.map(item=><Post item={item} key={item.id}/>)
             }

            </div>
        </>
     );
}
 
export default PostList;