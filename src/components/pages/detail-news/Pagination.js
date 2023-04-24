import React from "react";

const DetailNewsPagePagination = () => {
	return (
		<div className="DetailNewsPage__pagination">
			<button className="prev">{`<<Bài viết trước`}</button>
			<button className="next">{`Bài viết kế tiếp>>`}</button>
		</div>
	);
};

export default DetailNewsPagePagination;
