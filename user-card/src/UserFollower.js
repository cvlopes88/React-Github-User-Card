import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'



const UserFollower = (props) => {
    console.log(props.userfollower)
    

    return (
        <>
        {props.userfollower.map(userfollower => (
 <div  className='userfollower' >
   <Card>
   <h2>{userfollower.login}</h2>
   <Image src={userfollower.avatar_url} alt={userfollower.login} />
   
   
   
   </Card>
   
 </div>
       
       ))}  
        </>
    )
}

export default UserFollower;