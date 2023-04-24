import { Navbar } from "@/components/common";
import React from "react";

const DetailNewsPageHeader = () => {
	return (
		<header className="DetailNewsPage__header">
			<Navbar />

			<div className="heading">
				<div className="heading__inner">
					<h2>Tin tức thị trường</h2>
					<h1>BẤT ĐỘNG SẢN GLOVAL LIVING</h1>
					<p>
						<img
							src="/images/detail-news/admin-icon.png"
							alt="admin"
						/>
						<span>admin</span>
					</p>
					<p>
						<img
							src="/images/detail-news/clock-icon.png"
							alt="clock"
						/>
						<span>28/03/2023</span>
					</p>
				</div>
			</div>

			<div className="overlay"></div>
		</header>
	);
};

export default DetailNewsPageHeader;
