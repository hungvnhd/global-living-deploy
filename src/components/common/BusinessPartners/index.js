import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const leftPartners = [
	{
		logo: "/images/partners/ALPHAREAL/alphareal.png",
	},
	{
		logo: "/images/partners/bestnowreal/bestnowreal.png",
	},
	{
		logo: "/images/partners/grandhousing/grandhousing.png",
	},
	{
		logo: "/images/partners/khaihoanland/khaihoanland.png",
	},
	{
		logo: "/images/partners/MGLAND/mgland.jpg",
	},
	{
		logo: "/images/partners/MLANDCoastal/mlandcoastal.png",
	},
	{
		logo: "/images/partners/NEWBLUE/newblue.png",
	},
	{
		logo: "/images/partners/ngocphuongdong/ngocphuongdong.png",
	},
];

const rightPartners = [
	{
		logo: "/images/partners/SAIGONCENTERREAL/saigoncenterreal.png",
	},
	{
		logo: "/images/partners/SOUTHERNHOMES/southernhomes.png",
	},
	{
		logo: "/images/partners/TORII/TORII.jpg",
	},
	{
		logo: "/images/partners/VGP/vgp.png",
	},
	{
		logo: "/images/partners/VIETSUN/logo.png",
	},
	{
		logo: "/images/partners/YOURHOMES/yourhomes.png",
	},
];

const BusinessPartners = () => {
	return (
		<section className="BusinessPartners">
			<h2>BUSINESS PARTNERS</h2>
			<div className="BusinessPartners__slide-left">
				<Marquee
					speed={100}
					gradient={false}
					style={{
						width: "50%",
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							gap: "50px",
						}}
					>
						{leftPartners.map((item, index) => {
							return (
								<div key={index}>
									<img src={item.logo} alt="logo" />
								</div>
							);
						})}
					</div>
				</Marquee>
			</div>

			<div className="BusinessPartners__slide-right">
				<div></div>
				<Marquee
					speed={100}
					gradient={false}
					direction="right"
					style={{
						width: "50%",
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							gap: "100px",
						}}
					>
						{rightPartners.map((item, index) => {
							return (
								<div key={index}>
									<img src={item.logo} alt="logo" />
								</div>
							);
						})}
					</div>
				</Marquee>
			</div>

			<div className="BusinessPartners__detail">
				<h3>HỆ THỐNG PHÂN PHỐI ĐỘC QUYỀN</h3>
				<p>
					Tham gia ngay để trở thành Đại lý/Cộng tác viên độc quyền và
					nhận những thông tin, tài liệu đắt giá nhất về thị trường
					đầu tư bất động sản quốc tế.
				</p>
				<button
					onClick={() => {
						window.location.href = "/register";
					}}
				>
					Đăng ký ngay
				</button>
			</div>
		</section>
	);
};

export default BusinessPartners;
