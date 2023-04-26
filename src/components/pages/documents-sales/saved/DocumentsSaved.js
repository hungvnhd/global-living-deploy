import { Col, Row } from "antd";
import React from "react";
import DocumentsSalesItem from "../SalesItem";

const DocumentsSaved = () => {
	return (
		<div className="DocumentsSales__saved">
			<h2>
				Tài liệu đã lưu về:
				<p>Hungary</p>
			</h2>

			<Row wrap gutter={50}>
				<Col span={6} className="DocumentsSaved__item">
					<img
						src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"
						alt="image"
					/>
				</Col>
				<Col span={6} className="DocumentsSaved__item">
					<img
						src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"
						alt="image"
					/>
				</Col>
				<Col span={6} className="DocumentsSaved__item">
					<img
						src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"
						alt="image"
					/>
				</Col>
			</Row>
		</div>
	);
};

export default DocumentsSaved;
