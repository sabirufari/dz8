import React from 'react'

function PostId({item}) {
  return (
    <div>
        <h2>{item.postId}</h2>
        <h2>{item.id}</h2>
        <h2>{item.title}</h2>
        <h2>{item.body}</h2>
    </div>
  )
}

export default PostId