import React from "react";

const DocumentsSalesItem = ({ onClick, children }) => {
	return (
		<div className="DocumentsSaved__item" onClick={onClick}>
			<img
				src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"
				alt="image"
			/>

			{children}
		</div>
	);
};

export default DocumentsSalesItem;
