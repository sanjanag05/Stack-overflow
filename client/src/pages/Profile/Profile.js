import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import LeftSidebar from '../../component/Leftbar/Leftbar'
import Avatar from '../../component/Avatar/Avatar'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import ProfileBio from './ProfileBio'
import EditProfileForm from './EditProfileForm'


const Profile = () => {

  const {id} =useParams
  const users = useSelector((state)=> state.usersReducer)
  const currentUser = useSelector((state)=> state.currentReducer)
  const currentProfile = users.filter((user)=> user._id === id)[0]
   
  const [Switch, setSwitch] = useState(false)
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className="home-container-2">
        <section>
          <div className="user-details-container">
            <div className="user-details">
              <Avatar  backgroundColor= 'purple' color= 'white' fontSize='50px' px='40px' py='30px' marginTop='60px' paddingTop='30px' >
              {currentProfile?.name.charAt(0).toUpperCase()}

              </Avatar>
              <div className="user-name">
                <h1>{currentProfile?.name}</h1>
                <p>Joined {moment(currentProfile?.joinedOn).fromNow()}</p>
              </div>
            </div>
            {
              currentUser?.result._id === id &&(
                <button type="button" onClick={()=>setSwitch(true)} className="edit-profil-btn">
                  Edit Profile
                </button>
              )
            }
          </div>
          <>
          {
            Switch ?(
              <EditProfileForm currentUser={currentUser} setSwitch={setSwitch}/>
            ) :(
              <ProfileBio currentProfile={currentProfile}/>
            )
          }
          </>
        </section>
      </div>
    </div>
  )
}

export default Profile