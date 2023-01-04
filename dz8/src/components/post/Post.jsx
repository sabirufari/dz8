import { Link } from "react-router-dom";
 
const Post = ({item}) => {
  return (
    <>
  
     {item.postId &&  <h3>postId:{item?.postId}</h3>}
     {item.userId &&  <h3>userId:{item?.userId}</h3>}

      <h3>id: {item?.id}</h3>

      {item?.userId ?     <Link to={`${item?.userId}`}>

      <h3> title: {item?.title}</h3>

      </Link>: <h3> title: {item?.title}</h3>}
      
      <h3>body: {item?.body}</h3>
      
  </>
  )
};

export default Post;
