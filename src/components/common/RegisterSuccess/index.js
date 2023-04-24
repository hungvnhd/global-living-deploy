import Link from "next/link";
import React from "react";

const RegisterSuccess = () => {
	return (
		<section className="RegisterSuccess">
			<img src="/logo.png" alt="logo" />
			<h1>
				BẤT ĐỘNG SẢN ĐỊNH CƯ QUỐC TẾ GIẢI PHÁP ĐẦU TƯ KHÔNG BIÊN GIỚI
			</h1>

			<div className="RegisterSuccess-detail">
				<img src="/images/success.png" alt="success" />
				<h2>ĐĂNG KÝ THÀNH CÔNG</h2>
				<p>
					Global Living sẽ liên hệ để xác nhận trong thời gian sớm
					nhất
				</p>
				<div className="RegisterSuccess-navigate">
					<Link href="#">{`<<Tìm hiểu thông tin dự án`}</Link>
					<Link href="#">{`Xem tài liệu bán hàng >>`}</Link>
				</div>
			</div>
		</section>
	);
};

export default RegisterSuccess;
