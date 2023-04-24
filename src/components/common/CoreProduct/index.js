import Link from "next/link";
import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const images = [
  "/images/core-product/boulevard.jpg",
  "/images/core-product/budapest-hungary.jpg",
  "/images/core-product/mg.jpg",
  "/images/core-product-image.png",
];

const CoreProduct = () => {
  const sliderRef = useRef(null);
  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className='CoreProduct'>
      <h2>CORE PRODUCTS</h2>
      <div className='CoreProduct__content'>
        <div className='CoreProduct__slide'>
          <button
            className='prev'
            onClick={() => sliderRef.current.slickPrev()}
          >
            <img src='/images/icons/prev-icon.svg' alt='icon' />
          </button>
          <Slider ref={sliderRef} {...settings}>
            {images.map((image, index) => {
              return (
                <img src={image} alt={image} className='CoreProduct__img' />
              );
            })}
          </Slider>
          <button
            className='next'
            onClick={() => sliderRef.current.slickNext()}
          >
            <img src='/images/icons/next-icon.svg' alt='icon' />
          </button>
        </div>

        <div className='CoreProduct__detail'>
          <h3>BẤT ĐỘNG SẢN ĐỊNH CƯ HUNGARY</h3>
          <p>
            Chương trình cấp thẻ cư trú nhân Hungary thông qua hình thức đầu tư
            bất động sản. Với mức đầu tư tối thiểu chỉ từ 175k Euro - tương
            đương khoảng 4.6 tỷ VND, Nhà đầu tư sẽ vừa sở hữu tài sản nhà đất ở
            địa thế vàng - Trái tim của Châu Âu, vừa mang lại cho cả 3 thế hệ
            gia đình những đặc quyền vô giá của một công dân toàn cầu.
          </p>

          <div className='CoreProduct__detail-more first'>
            <div className='CoreProduct__detail-more--item'>
              <p className='label'>CHI PHÍ LÀM THẺ</p>
              <p className='price'>1.6 tỉ đồng</p>
            </div>
            <div className='CoreProduct__detail-more--item'>
              <p className='label'>CHI PHÍ ĐẦU TƯ TỐI THIỂU</p>
              <p className='price'>4.6 tỉ đồng</p>
            </div>
          </div>

          <div className='CoreProduct__detail-more'>
            <div className='CoreProduct__detail-more--item'>
              <p className='label'>THỜI GIAN DỰ KIẾN</p>
              <p className='price'>3 tháng</p>
            </div>
            <div className='CoreProduct__detail-more--item'>
              <Link
                href={"#AboutUs"}
                className='price'
                style={{ marginTop: "25px" }}
              >{`Tìm hiểu thêm >>`}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreProduct;
