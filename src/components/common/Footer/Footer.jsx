import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className='inner'>
        <img src='/logo.png' alt='global-living' />
        <h2>CÔNG TY CỔ PHẦN GLOBAL LIVING</h2>
        <p>Hotline: 0931626909</p>
        <div className='social'>
          <Link href={"#"}>
            <img src='/images/facebook-icon.png' alt='facebook' />
          </Link>
          <Link href={"#"}>
            <img src='/images/zalo-icon.png' alt='zalo' />
          </Link>
          <Link href={"#"}>
            <img src='/images/tv-icon.png' alt='tv' />
          </Link>
        </div>

        <div className='department'>
          <div className='department-box'>
            <h3 style={{ textAlign: "center" }}>Văn phòng Hà Nội</h3>
            <p>
              TOONG TRÀNG THI - Số 8 Tràng Thi Hàng Trống - Quận Hoàn Kiếm - HÀ
              NỘI
            </p>
          </div>

          <div className='department-box text-center'>
            <h3>Văn phòng Nha trang</h3>
            <p>
              COWORK GOLD COAST - Tầng 9, Toà nhà Gold Coast - Số 1 Trần Hưng
              Đạo, P. Lộc Thọ, TP NHA TRANG
            </p>
          </div>

          <div className='department-box'>
            <h3 style={{ textAlign: "center" }}>Văn phòng Hồ Chí Minh</h3>
            <p>
              SUNWAH INNOVATIONS - Tầng 6 - Tháp Golden - Toà nhà Sunwah Pearl
              90 Nguyễn Hữu Cảnh - Phường 2, Quận Bình Thạnh TP HỒ CHÍ MINH
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
