import React from 'react'
import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'
import { HeartBrokenSharp, HeartBrokenTwoTone, HeatPumpRounded, MonitorHeartTwoTone } from '@mui/icons-material'
export default function Rightbar({profile}) {

  const HomeRightBar=()=>{
    return(
    <>
    <div className="birthdayContainer">
<img className='birthdayImg' src='/assets/Gift-box-white-illustration-transparent-PNG.png'
/>
<span className='birthdayText'><b>james watson</b> and <b>3 other friends</b> have a birthday today.
 </span>
</div>
<img className='rightbarAd' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm5wtXwnZwUL1A0eyh5u_jdcj9E8d1guv4xA&usqp=CAU" />
<h4 className="rightbarTitle">Online Friends</h4>
<ul className="rightbarFriendList">
{Users.map(u=>(
  <Online key={u.id} user={u}/>
))}


</ul>
    

    </>
    );
  }
  const ProfileRightbar=()=>{
    return(
    <>
    <h4 className='rightbarTitle'>User Information</h4>
    <div className="rightbarInfo">
<div className="rightbarInfoItem">
<span className="rightbarInfoKey">City:</span>
<span className="rightbarInfoKey">Value</span>

</div>
<div className="rightbarInfoItem">
<span className="rightbarInfoKey">From</span>
<span className="rightbarInfoKey">Delhi</span>

</div>
<div className="rightbarInfoItem">
<span className="rightbarInfoKey">RelationShip <HeartBrokenSharp className='heart'/> </span>
<span className="rightbarInfoKey">single</span>

</div>
<h4 className='rightbarTitle'> your Friends</h4>
<div className="rightbarFollowings">
  <div className="rightbarFollowing">
<img className='rightbarFollowingImg' src='/assets/person/sourrr.jpg'/>
<span className='rightbarFollowingName'>dino james</span>
  </div>
  <div className="rightbarFollowing">
<img className='rightbarFollowingImg' src='/assets/person/sourrr.jpg'/>
<span className='rightbarFollowingName'>dino james</span>
  </div>
  <div className="rightbarFollowing">
<img className='rightbarFollowingImg' src='/assets/person/sourrr.jpg'/>
<span className='rightbarFollowingName'>dino james</span>
  </div>
  <div className="rightbarFollowing">
<img className='rightbarFollowingImg' src='/assets/person/sourrr.jpg'/>
<span className='rightbarFollowingName'>dino james</span>
  </div>
  <div className="rightbarFollowing">
<img className='rightbarFollowingImg' src='/assets/person/sourrr.jpg'/>
<span className='rightbarFollowingName'>dino james</span>
  </div>
  <div className="rightbarFollowing">
<img className='rightbarFollowingImg' src='/assets/person/sourrr.jpg'/>
<span className='rightbarFollowingName'>dino james</span>
  </div>

</div>





    </div>

    </>
    );
  }
  return (
    <div className='rightbar'>


<div className="rightWrapper">
{profile ? <ProfileRightbar/>:<HomeRightBar/>}
</div>

    </div>
  )
}
