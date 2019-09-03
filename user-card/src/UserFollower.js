import React from 'react';




function UserFollower(props) {
    console.log(props)

    return (
        <>
        {props.userfollower.map(userfollower => (
 <div  className='userfollower' >
   <img src={props.userfollower.avatar_url} alt={props.userfollower.login} />
   <h3>{props.userfollower.login}</h3>
   
   
 </div>
       
       ))}  
        </>
    )
}

export default UserFollower;