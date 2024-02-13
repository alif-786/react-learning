import React,{useContext} from 'react'
import Usercontext from '../context/UserContext'

const Profile = () => {
    const { user } = useContext(Usercontext)
    if (!user) return (
     <div>Please login again </div>
    )

    return (
        <div className='text-3xl font-bold '>Welcome <span className='text-green-600 font-bold uppercase'> {user.username}</span></div>
    )
}

export default Profile