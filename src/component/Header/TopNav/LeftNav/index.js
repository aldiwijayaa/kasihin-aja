import React from 'react';


const LeftNav = (props) => {
  return (
    <div className="left-navigation">
      <ul className="page_navigation">
        <li>
          {props.page}
        </li>
      </ul>
    </div>
  )
}
export default LeftNav;