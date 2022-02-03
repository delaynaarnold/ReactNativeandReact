import React from 'react';
import ReactDOM from 'react-dom';
import Planet1 from './Images/planetone.png';
import Planet2 from './Images/planet2.png';
import Ufo from './Images/ufo.png';
import SingleComment from './SingleComment';



const App = () => {
    return (
        <div className='ui comments'>
          <SingleComment
           name= 'Alex' 
           time= '1:25PM' 
           picture= {Planet1} /> 
          <SingleComment 
          name= 'Andromeda' 
          time='3:30PM' 
          comment='I will see other planets one day if I become an astronaut!'
          picture={Planet2}/> 
          <SingleComment 
          name= 'Sarah' 
          time= '5:00PM' 
          comment='I really think I want to fly to outerspace one of these days.' 
          picture={Ufo}/> 
        </div>
        
    )
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
)