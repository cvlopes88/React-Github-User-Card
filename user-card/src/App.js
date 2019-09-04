import React from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './UserCard';

import UserFollower from './UserFollower';


class App extends React.Component {

  constructor() {
    super();
  this.state = {
    users: [],
    followers: [],
  }
  }
  
  componentDidMount() {
    axios
    .get('https://api.github.com/users/cvlopes88')
    
    .then(res => this.setState({ users: res.data} ))
   
    .catch(err => console.log('errrooorrr'))


    axios.get('https://api.github.com/users/cvlopes88/followers')

    .then(res => this.setState({ followers: res.data} ))
   
    .catch(err => console.log('errrooorrr'))

  }

render() {
  
  return (
    <div>
      <h1>User Card</h1>
      <UserCard usercard={this.state.users}/>
     <h1>Followers</h1>
    <UserFollower userfollower={this.state.followers} />
    </div>
    
  )
}


}

export default App;
