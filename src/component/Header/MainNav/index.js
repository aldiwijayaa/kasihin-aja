import React from 'react';
import Tittle from './Tittle';
import Search from './Search';
import Icon from './Icon';
import img1 from '../../../img/cart.svg';
import img2 from '../../../img/chat.svg';
import img3 from '../../../img/notification.svg';
import ButtonLogin from './ButtonLogin';

const MainNav =() =>{
  return(
    <div className="main_navigasi">
      <div className="wrappnav">
        <Tittle/>
        <Search/>
        <div className="wrapping">
          <Icon  icon={img1} />
          <Icon  icon={img3} />
          <Icon  icon={img2} />
          <ButtonLogin />
        </div>
      </div>
    </div>
  )
}
export default MainNav;