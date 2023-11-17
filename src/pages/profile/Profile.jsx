import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import './profile.css'
export default function Profile() {
  return (
   
    <>

    <Topbar/>
    <div className="profile">
    <Sidebar/>
    <div className="profileRight">
<div className="profileRightTop">
    <div className="profileCover">
<img className='profileCoverImg' src='/assets/post/pasta.jpg'/>
<img className='profileUserImg' src='/assets/post/burger.jpg'/>


    </div>
    <div className="profileInfo">
<h4 className='profileInfoName'>fhwhqq</h4>
<span className='profilrInfoDesc'>ej2nsj32s</span>

    </div>


</div>
<div className="profileRightBottom">
<Feed/>
    <Rightbar  />

</div>

    </div>
    
    
    </div>
    
    
        </>
  )
}
