import React from 'react';

const Icon =(props) =>{
  return (
    <div className="icon">
      <div className="wrapp-navbar">
        <img src={props.icon}/>
      </div>
    </div>
  )
}
export default Icon;