import React from 'react';
import Kategori from './Kategori';
import SemuaProduk from './SemuaProduk';

const Body = () => {
  return (
    <div className="Body">
      <div className="kategori">
        <p>Kategori</p>
        <div className="option">
          <Kategori img="https://imgf.apk.tools/300/f/d/9/com.supercute.bajuindonesia.png" tittle="baju anak" />
          <Kategori img="https://imgf.apk.tools/300/f/d/9/com.supercute.bajuindonesia.png" tittle="baju anak" />
          <Kategori img="https://imgf.apk.tools/300/f/d/9/com.supercute.bajuindonesia.png" tittle="baju anak" />
          <Kategori img="https://imgf.apk.tools/300/f/d/9/com.supercute.bajuindonesia.png" tittle="baju anak" />
          <Kategori img="https://imgf.apk.tools/300/f/d/9/com.supercute.bajuindonesia.png" tittle="baju anak" />
          <Kategori img="https://imgf.apk.tools/300/f/d/9/com.supercute.bajuindonesia.png" tittle="baju anak" />
          <Kategori img="https://imgf.apk.tools/300/f/d/9/com.supercute.bajuindonesia.png" tittle="baju anak" />
          <Kategori img="https://imgf.apk.tools/300/f/d/9/com.supercute.bajuindonesia.png" tittle="baju anak" />
          <Kategori img="https://imgf.apk.tools/300/f/d/9/com.supercute.bajuindonesia.png" tittle="baju anak" />
          <Kategori img="https://imgf.apk.tools/300/f/d/9/com.supercute.bajuindonesia.png" tittle="baju anak" />
          <Kategori img="https://imgf.apk.tools/300/f/d/9/com.supercute.bajuindonesia.png" tittle="baju anak" />
          <Kategori img="https://imgf.apk.tools/300/f/d/9/com.supercute.bajuindonesia.png" tittle="baju anak" />
          <Kategori img="https://imgf.apk.tools/300/f/d/9/com.supercute.bajuindonesia.png" tittle="baju anak" />
          <Kategori img="https://imgf.apk.tools/300/f/d/9/com.supercute.bajuindonesia.png" tittle="baju anak" />
          <Kategori img="https://imgf.apk.tools/300/f/d/9/com.supercute.bajuindonesia.png" tittle="baju anak" />
          <Kategori img="https://imgf.apk.tools/300/f/d/9/com.supercute.bajuindonesia.png" tittle="baju anak" />
        </div>
      </div>
      <div className="allproduk">
        <p>Semua Produk</p>
        <div className="optionproduk">
          <SemuaProduk img="https://cf.shopee.co.id/file/51f333385a7b22362397970848457119_tn" tittle="Kaos Distro (tersedia 5 Pilihan Warna)" stok="Tersedia" />
          <SemuaProduk img="https://cf.shopee.co.id/file/51f333385a7b22362397970848457119_tn" tittle="Kaos Distro (tersedia 5 Pilihan Warna)" stok="Dalam Proses" />
          <SemuaProduk img="https://cf.shopee.co.id/file/51f333385a7b22362397970848457119_tn" tittle="Kaos Distro (tersedia 5 Pilihan Warna)" stok="Tersedia" />
          <SemuaProduk img="https://cf.shopee.co.id/file/51f333385a7b22362397970848457119_tn" tittle="Kaos Distro (tersedia 5 Pilihan Warna)" stok="Dalam Proses" />
          <SemuaProduk img="https://cf.shopee.co.id/file/51f333385a7b22362397970848457119_tn" tittle="Kaos Distro (tersedia 5 Pilihan Warna)" stok="Tersedia" />
        </div>
      </div>
    </div>
  )
}
export default Body;