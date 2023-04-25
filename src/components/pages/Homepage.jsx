import Link from "next/link";
import {
  AboutUs,
  BusinessPartners,
  Contact,
  CoreProduct,
  Footer,
  Navbar,
} from "../common";

export default function HomePage() {
  return (
    <>
      <Navbar></Navbar>
      <header className="Header">
        <video autoPlay muted loop id="myVideo">
          <source
            src="https://firebasestorage.googleapis.com/v0/b/global-living.appspot.com/o/header-video.mp4?alt=media&token=44f3ea74-649a-4967-84f9-e8f70b9eca1f"
            type="video/mp4"
          />
        </video>
        {/* <div className="nav-card">
					<h3>THE VILLA HOUSE</h3>
					<article>
						<ul>
							<li>VỊ TRÍ: Thảo Điền, Tp. Hồ Chí Minh</li>
							<li>TỔNG DIỆN TÍCH XÂY DỰNG: 423m2 - 3 tầng</li>
							<li>
								HẠNG MỤC THI CÔNG: Xây dựng cơ bản và hoàn thiện
								nội thất
							</li>
							<li>
								PHONG CÁCH THIẾT KẾ: concept Indochine (phong
								cách Đông Dương
							</li>
						</ul>
						<button>
							<img src="/Eye.png" alt="btn-icon" />
						</button>
					</article>
				</div> */}

        <div className="view-detail">
          <strong>ĐẦU TƯ BẤT ĐỘNG SẢN - NHẬN THẺ CƯ TRÚ HUNGARY</strong>
          <br />
          <Link
            href="https://info.globalliving-group.com/hungary?fbclid=IwAR2hyJCSClRp4e-rkqJR63DoTRQnDVBzXs0776Ead3lyjVmBK4RU8u19qWU"
            target={"_blank"}
          >{`Xem chi tiết chương trình >>`}</Link>
        </div>
      </header>
      <CoreProduct />
      <Contact />
      <AboutUs />
      <BusinessPartners />
      <Footer></Footer>
    </>
  );
}
