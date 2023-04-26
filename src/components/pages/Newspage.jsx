import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import { Footer, Navbar } from "../common";
function NewsPage() {
	const settings = {
		arrows: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2,
	};

	return (
		<div className="newsPage">
			<div>
				<Navbar />
				<p>TIN TỨC</p>
			</div>
			<div className="latestNews">
				<div>
					<p>TIN TỨC MỚI NHẤT VỀ</p>
					<select>
						<option value="1">Hungary</option>
						<option value="2">1 Noi nao do</option>
					</select>
				</div>
				<div style={{ maxWidth: "90%", width: "90%", margin: "auto" }}>
					<Slider {...settings}>
						{[1, 2, 3, 4].map((image, index) => {
							return (
								<div className="carouselItem">
									<p>TIN TỨC THỊ TRƯỜNG</p>
									<p>BẤT ĐỘNG SẢN GLOBAL LIVING </p>
									<button>Xem thêm</button>
									<img
										src="/assits/Rectangle175.png"
										alt="photo"
									/>
								</div>
							);
						})}
					</Slider>
				</div>
				{/* <Carousel responsive={responsive}>
					
					<div
						className="carouselItem"
						style={{ marginLeft: "240px" }}
					>
						<p>TIN TỨC THỊ TRƯỜNG</p>
						<p>BẤT ĐỘNG SẢN GLOBAL LIVING </p>
						<button>Xem thêm</button>
						<img src="/assits/Rectangle175.png" alt="photo" />
					</div>
				</Carousel> */}
				;
			</div>
			<div className="questions">
				<div className="questions-text">
					<p>NHỮNG CÂU HỎI PHỔ BIẾN VỀ</p>
					<button>Hungary</button>
					{/* <img src="/assits/test1.png" alt="photo" /> */}
				</div>
				<div className="question-type">
					<div className="question-select">
						<select>
							<option>Quy trình - Thủ tục</option>
							<option disabled> Thông tin cần render</option>
						</select>
					</div>
					<div>
						<select>
							<option>Chi phí - Thuế</option>
							<option disabled> Thông tin cần render</option>
						</select>
					</div>
					<div>
						<select>
							<option>Dịch vụ từ Global Living</option>
							<option disabled> Thông tin cần render</option>
						</select>
					</div>
					<div>
						<select>
							<option>Câu hỏi chi tiết</option>
							<option disabled> Thông tin cần render</option>
						</select>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default NewsPage;
