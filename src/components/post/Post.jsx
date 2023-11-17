import React, { useState } from 'react'
import './post.css'
import { MoreVert, Preview } from '@mui/icons-material'
import { Users } from '../../dummyData'
export default function Post({Post}) {
const [like,setLike]=useState(Post.like);
const [heart,setHeart]=useState(Post.heart);
const [isLiked,setIsLiked]=useState(false);


const handleHeart=()=>{
  setHeart(isLiked ? heart-1 : heart+1);
  setIsLiked(!isLiked)
  
}
const handleAddLike=()=>{
setLike(isLiked ? like-1 :like+1);
setIsLiked(!isLiked)

}


  return (
    <div className='post'>
<div className="postWrapper">
<div className="postTop">
<div className="postTopLeft">
<img className='postProfileImg' src={Users.filter((u)=>u.id=== Post.userId)[0].profilePicture}/>
<span className='postUsername'>{Users.filter((u)=>u.id=== Post.userId)[0].username}</span>
<span className='postDate'>{Post.date} </span>
</div>
<div className="postRight"></div>
<MoreVert/>
</div>

<div className="postCenter">
<span className='postText'>{Post?.desc}</span>
<img className='postImg' src={Post.photo}/>
</div>
<div className="postBottom">
<div className="postBottomLeft">
<img onClick={handleHeart} className='likeIcon' src='/assets/—Pngtree—3d red heart cute valentine_5315044.png'/>
<span className='postLikeCounter' >{heart}</span>
<img onClick={handleAddLike} className='likeIcon' src='/assets/like.png'/>
<span className='postLikeCounter' >{like}</span>

</div>
<div className="postBottomRight">
<span className="postCommentText">{Post.comment}</span>


</div>
</div>

</div>

    </div>
  )
}
