import React from 'react';

const SemuaProduk = (props) => {
  return (
    <div className="produk">
      <div className="wrappitem">
        <img src={props.img} />
        <div className="wrapproduk">
          <div className="tittleproduk">
            <p>{props.tittle}</p>
          </div>
          <div className="buttontambah">
            <button>Add</button>
            <div className="descstok">
              <p>{props.stok}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SemuaProduk;