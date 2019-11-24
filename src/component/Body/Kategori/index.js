import React from 'react';

const Kategori =(props) =>{
  return(
    <div className="optionkategori">
      <img src={props.img}/>
      <div className="tittlekategori">
        <p>{props.tittle}</p>
      </div>        
    </div>    
  )
}
export default Kategori;