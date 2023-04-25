import React from "react";
import { useState } from "react";

const AboutUs = () => {
  const [isZoomLocate, setIsZoomLocate] = useState(false);
  const [isZoomVision, setIsZoomVision] = useState(false);
  const [isZoomMission, setIsZoomMission] = useState(false);

  return (
    <section className='AboutUs' id='AboutUs'>
      <div
        className='AboutUs__bg AboutUs__locate'
        style={
          isZoomLocate
            ? {
                width: "60vw",
                zIndex: 10,
                cursor: "pointer",
                transition: "all 0.3s ease-in",
              }
            : {
                cursor: "pointer",
                transition: "all 0.3s ease-in",
              }
        }
        onClick={() => {
          setIsZoomLocate((prev) => !prev);
          setIsZoomVision(false);
          setIsZoomMission(false);
        }}
      >
        <img
          src='/images/z4293639748365_264652ac39d8acbdc6399d844732473c.jpg'
          alt='icon'
        />
        {isZoomLocate ? <></> : <div className='overlay' />}
        <div className='AboutUs__logo' style={{ cursor: "pointer" }}>
          {!isZoomLocate ? (
            <>
              <div className='AboutUs__logo-icon'>
                <img src='/images/icons/vision-icon-1.png' alt='icon' />
              </div>
              <h2 style={{ width: "120%" }}>ĐỊNH VỊ THƯƠNG HIỆU</h2>
            </>
          ) : (
            <></>
          )}
        </div>

        <div
          className='AboutUs__text'
          style={{ opacity: isZoomLocate ? 1 : 0 }}
        >
          <h3>Định vị thương hiệu</h3>
          <p>
            Global Living là thương hiệu hàng đầu tại Việt Nam trong lĩnh vực tư
            vấn và phát triển bất động sản cao cấp. Với uy tín và kinh nghiệm,
            chúng tôi đã và đang mang tới cho khách hàng những giải pháp đầu tư
            bất động sản tối ưu tại cả trong và ngoài nước, kết hợp với các dịch
            vụ hỗ trợ định cư độc đáo, giúp khách hàng tiếp cận những đặc quyền
            của công dân toàn cầu. Chúng tôi luôn cam kết mang đến sự hài lòng
            và thành công cho khách hàng trong mỗi giao dịch và dự án.
          </p>
        </div>
      </div>

      <div
        className='AboutUs__bg AboutUs__vision'
        onClick={() => {
          setIsZoomVision((prev) => !prev);
          setIsZoomLocate(false);
          setIsZoomMission(false);
        }}
        style={
          isZoomVision
            ? {
                width: "60vw",
                zIndex: 10,
                cursor: "pointer",
                transition: "all 0.3s ease-in",
              }
            : {
                cursor: "pointer",
                transition: "all 0.3s ease-in",
              }
        }
      >
        <img
          src='/images/vision-bg-2-hover.png'
          alt='icon'
          className='AboutUs__vision-bg'
        />
        {isZoomLocate || isZoomMission ? <div className='overlay' /> : <></>}
        <div className='AboutUs__logo' style={{ cursor: "pointer" }}>
          {!isZoomVision ? (
            <>
              <div className='AboutUs__logo-icon'>
                <img src='/images/icons/vision-icon-2.png' alt='icon' />
              </div>
              <h2>TẦM NHÌN</h2>
            </>
          ) : (
            <></>
          )}
        </div>

        <div
          className='AboutUs__text'
          style={{ opacity: isZoomVision ? 1 : 0 }}
        >
          <h3>Tầm nhìn</h3>
          <p>
            Global Living định hướng trở thành đơn vị tiên phong trong lĩnh vực
            đầu tư và phát triển bất động sản cao cấp. Với sự tận tâm và chuyên
            nghiệp, chúng tôi luôn đặt mục tiêu mang đến cho khách hàng những cơ
            hội đầu tư đắt giá và tấm thẻ định cư quyền lực, tại những quốc gia
            mà sự tiến bộ và tiềm năng phát triển còn rất lớn. Chúng tôi luôn nỗ
            lực không ngừng để giữ vững được vị thế trong tâm trí khách hàng là
            một đơn vị uy tín với chất lượng dịch vụ hàng đầu.
          </p>
        </div>
      </div>

      <div
        className='AboutUs__bg AboutUs__mission'
        style={
          isZoomMission
            ? {
                width: "60vw",
                zIndex: 10,
                cursor: "pointer",
                transition: "all 0.3s ease-in",
              }
            : {
                cursor: "pointer",
                transition: "all 0.3s ease-in",
              }
        }
        onClick={() => {
          setIsZoomMission((prev) => !prev);
          setIsZoomVision(false);
          setIsZoomLocate(false);
        }}
      >
        <img src='/images/lau_dai_thanh_thang_ninh_binh_9.jpg' alt='icon' />
        {isZoomMission ? <></> : <div className='overlay' />}
        <div className='AboutUs__logo' style={{ cursor: "pointer" }}>
          {!isZoomMission ? (
            <>
              <div className='AboutUs__logo-icon'>
                <img src='/images/icons/vision-icon-3.png' alt='icon' />
              </div>
              <h2>SỨ MỆNH</h2>
            </>
          ) : (
            <></>
          )}
        </div>

        <div
          className='AboutUs__text'
          style={{ opacity: isZoomMission ? 1 : 0 }}
        >
          <h3>Sứ mệnh</h3>
          <p>
            Sứ mệnh của Global Living là đồng hành cùng khách hàng qua từng bước
            trên hành trình đầu tư bất động sản cao cấp tại các quốc gia phát
            triển. Không chỉ dừng lại ở những sản phẩm đầu tư quốc tế với chất
            lượng vượt trội, chúng tôi còn mong muốn hỗ trợ khách hàng sở hữu
            tấm thẻ định cư quý giá để tận hưởng những lợi ích của một công dân
            toàn cầu. Giúp cho khách hàng hiện thực hóa ước mơ sống và làm việc
            tại một môi trường an toàn, tiện nghi với chất lượng cuộc sống đẳng
            cấp chính là nhiệm vụ của Global Living. Chúng tôi tự hào là đối tác
            đáng tin cậy của khách hàng, và luôn nỗ lực để mang đến cho họ sự
            hài lòng và những trải nghiệm tốt nhất trên con đường thành công và
            thịnh vượng.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
