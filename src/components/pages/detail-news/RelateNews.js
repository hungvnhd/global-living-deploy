import React from "react";
import DetailNewsPageRelateNewsItem from "./RelateNewsItem";

const relates = [
	{
		author: "admin",
		image: "/images/detail-news/relate-img.png",
		date: "28/03/2023",
		title: "BẤT ĐỘNG SẢN",
		sumary: `Đối với hướng Tây Nam, Cửu cung phi tinh năm 2023 chỉ ra rằng
        đây là phương vị nơi sao`,
	},
	{
		author: "admin",
		image: "/images/detail-news/relate-img.png",
		date: "28/03/2023",
		title: "BẤT ĐỘNG SẢN",
		sumary: `Đối với hướng Tây Nam, Cửu cung phi tinh năm 2023 chỉ ra rằng
        đây là phương vị nơi sao`,
	},
	{
		author: "admin",
		image: "/images/detail-news/relate-img.png",
		date: "28/03/2023",
		title: "BẤT ĐỘNG SẢN",
		sumary: `Đối với hướng Tây Nam, Cửu cung phi tinh năm 2023 chỉ ra rằng
        đây là phương vị nơi sao`,
	},
];

const DetailNewsPageRelateNews = () => {
	return (
		<div className="DetailNewsPageRelateNews">
			<h2>TIN TỨC LIÊN QUAN</h2>

			<div className="DetailNewsPageRelateNews__list">
				{relates?.map((relate, index) => {
					return (
						<DetailNewsPageRelateNewsItem
							key={index}
							relate={relate}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default DetailNewsPageRelateNews;
