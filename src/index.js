import React from 'react';
import ReactDOM from 'react-dom';
import Planet1 from './Images/planetone.png';
import Planet2 from './Images/planet2.png';
import Ufo from './Images/ufo.png';
import SingleComment from './SingleComment';
import UserCard from './userCard';



const App = () => {
    return (
        <div className='ui comments'>
            <UserCard>
                <div>
                    Hello How are you?
                </div>
            </UserCard>
            <UserCard>
          <SingleComment
           name= 'Lanie' 
           time= '1:25PM' 
           comment='I will see other planets one day if I become an astronaut!'
           picture= {Planet1}
            /> 
          </UserCard>
          <UserCard>
          <SingleComment 
          name= 'Andromeda' 
          time='3:30PM' 
          comment='I will see other planets one day if I become an astronaut!'
          picture={Planet2}
          /> 
          </UserCard>
          <UserCard>
          <SingleComment 
          name= 'Sarah' 
          time= '5:00PM' 
          comment='I really think I want to fly to outerspace one of these days.' 
          picture={Ufo}
          /> 
          </UserCard>
        </div>
        
    )
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
)