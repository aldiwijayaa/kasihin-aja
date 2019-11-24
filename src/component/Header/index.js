import React from 'react';
import TopNav from './TopNav';
import MainNav from './MainNav';


const Header =() =>{
  return(
    <div className="header">
      <TopNav />
      <MainNav />
    </div>
  )
}
export default Header;