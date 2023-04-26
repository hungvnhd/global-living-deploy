import React from "react";

const MediaMaterialItemModal = ({ onClick }) => {
	return (
		<div
			className="MediaMaterialItemModal"
			style={{ cursor: "pointer" }}
			onClick={onClick}
		>
			<img
				src="/images/lau_dai_thanh_thang_ninh_binh_9.jpg"
				alt="image"
			/>

			<div className="CartItemModal__detail">
				<p>Tháng 3 | Icon</p>
				<p>Chia sẻ: Zalo | Messenger | Link</p>
			</div>
		</div>
	);
};

export default MediaMaterialItemModal;
