import React from 'react';
import UserFollower from './UserFollower';

function UserCard(props) {
    

    return (
        <>
        
 <div key={props.usercard.id} className='usercard' >
   <img src={props.usercard.avatar_url} alt={props.usercard.name} />
   <h2>{props.usercard.name}</h2>
   <h4>From: {props.usercard.location}</h4>
   <p>{props.usercard.bio}</p>
   <p>Following: {props.usercard.following}</p>
   <p>Followers: {props.usercard.followers}</p>
   
 </div>
      
       
        </>
    )
}

export default UserCard;