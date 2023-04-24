import React from "react";

const DetailNewsItem = ({ news, index }) => {
	const genIndex = (index) => {
		if (news?.title) {
			return index;
		} else {
			return index + 1;
		}
	};

	return (
		<div className="DetailNewsItem">
			{news?.title ? (
				<h2 className="title">
					{genIndex(index)}. {news?.title}
				</h2>
			) : (
				<></>
			)}
			<p className="content">{news?.firstContent}</p>
			<img src={news?.image} alt="image" />
			<p className="content">{news?.secondContent}</p>
		</div>
	);
};

export default DetailNewsItem;
