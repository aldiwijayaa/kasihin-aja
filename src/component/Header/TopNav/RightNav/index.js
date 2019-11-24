import React from 'react';

const RightNav = (props) => {
  return (
    <div className="right-navigation">
      <ul className="socialmedia">
        <li>
          <img src={props.icon} />
        </li>
      </ul>
    </div>
  )
}
export default RightNav;