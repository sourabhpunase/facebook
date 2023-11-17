import React from 'react'
import './closeFriend.css'
export default function CloseFriend({user}) {
  return (
    <li className="sidebarFriend">
<img src={user.profilePicturte} alt="" className="sidebarFriendImg" />
<span className="sidebarFriendName">{user.username}</span>
</li>
  )
}
