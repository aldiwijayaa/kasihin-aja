import React from 'react';
import img from '../../../../img/search.svg';

const Search =() =>{
  return(
    <div className="form-seacrh">
      <div className="pencarian">
        <form>
        <input type="text" id="search" placeholder="Search..." />
        <imput type="submit" class="button" value="search"><img src={img}/></imput>
        </form>
      </div>
    </div>
  )
}
export default Search;