import React from 'react'
import './sidebar.css'
import { Users } from '../../dummyData'
import { Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from '@mui/icons-material'
import CloseFriend from '../closefriend/CloseFriend'
export default function Sidebar() {
  return (
    <div className='sidebar'>
<div className="sidebarWrapper">
<ul className="sidebarList">
<li className="sidebarListItem">
<RssFeed className='sidebarIcon'/>
<span className="sidebarListItemText">feed</span>

</li>
<li className="sidebarListItem">
<Chat className='sidebarIcon'/>
<span className="sidebarListItemText">chats</span>

</li>
<li className="sidebarListItem">
<PlayCircleFilledOutlined className='sidebarIcon'/>
<span className="sidebarListItemText">videos</span>

</li>
<li className="sidebarListItem">
<Group className='sidebarIcon'/>
<span className="sidebarListItemText">groups</span>

</li>
<li className="sidebarListItem">
<Bookmark className='sidebarIcon'/>
<span className="sidebarListItemText">Bookmarks</span>

</li>
<li className="sidebarListItem">
<HelpOutline className='sidebarIcon'/>
<span className="sidebarListItemText">Questions</span>

</li>
<li className="sidebarListItem">
<WorkOutline className='sidebarIcon'/>
<span className="sidebarListItemText">Jobs</span>

</li>
<li className="sidebarListItem">
<Event className='sidebarIcon'/>
<span className="sidebarListItemText">Events</span>

</li>
<li className="sidebarListItem">
<School className='sidebarIcon'/>
<span className="sidebarListItemText">Courses</span>

</li>


</ul>
<button className='sidebarButton'>Show More</button>
<hr className='sidebarHr'/>

<ul className="sidebarFriendList">

{Users.map(u=>(
  <CloseFriend key={u.id} user={u}/>
))
}

</ul>
</div>


    </div>
  )
}
