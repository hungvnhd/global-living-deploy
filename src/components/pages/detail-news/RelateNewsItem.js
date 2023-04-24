import React from "react";

const DetailNewsPageRelateNewsItem = ({ relate }) => {
	return (
		<div className="DetailNewsPageRelateNewsItem">
			<img src={relate?.image} alt="relate" />

			<div className="author">
				<span>{relate?.author}</span>
				<p>
					<img
						src="/images/detail-news/clock-relate-news.png"
						alt="clock"
					/>
					{relate?.date}
				</p>
			</div>

			<h2>{relate?.title}</h2>
			<p>{relate?.sumary}</p>

			<div className="more">
				<button>Xem thêm</button>
			</div>
		</div>
	);
};

export default DetailNewsPageRelateNewsItem;
