import React from 'react';
import LeftNav from './LeftNav'
import RightNav from './RightNav';
import img from '../../../img/facebook.svg';
import img1 from '../../../img/line.svg';
import img2 from '../../../img/instagram.svg';

const TopNav =() =>{
  return(
    <div className="top_navigation">
      <div className="containerheader">
        <div className="left">
          <LeftNav page="Tentang Kami"/>
          <LeftNav page="Pusat Bantuan"/>
          <LeftNav page="Syarat Layanan"/>
        </div>
        <div className="right">
          <RightNav icon={img}/>
          <RightNav icon={img1}/>
          <RightNav icon={img2}/>
        </div>
      </div>
    </div>
  )
}
export default TopNav;