import { DownloadOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DocumentsSalesItem from "../SalesItem";

const documents = [
	{
		key: "hungary",
		name: "Hungary",
	},
];

const LatestDocuments = () => {
	const [documentName, setDocumentName] = useState("");
	const [data, setData] = useState([1, 2, 3]);

	useEffect(() => {
		if (documentName === "hungary") {
			setData([1, 2, 3]);
		} else {
			setData([1, 2]);
		}
	}, [documentName]);

	return (
		<div className="DocumentsSales__saved">
			<h2>
				Tài liệu mới nhất về:
				{documents?.map((document) => {
					return (
						<p
							key={document?.key}
							onClick={() => setDocumentName(document?.key)}
						>
							{document?.name}
						</p>
					);
				})}
			</h2>

			<Row wrap gutter={50}>
				<Col span={6} className="DocumentsSaved__item">
					<img
						src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"
						alt="image"
					/>

					<div className="DocumentsSaved__item-content">
						<p>
							Đầu tư & định cư Hungary |{" "}
							<DownloadOutlined
								style={{
									fontSize: "30px",
									cursor: "pointer",
								}}
							/>
						</p>
						<p>Chia sẻ: Zalo | Messenger | Link</p>
					</div>
				</Col>

				<Col span={6} className="DocumentsSaved__item">
					<img
						src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"
						alt="image"
					/>

					<div className="DocumentsSaved__item-content">
						<p>
							Sải cánh vươn xa |{" "}
							<DownloadOutlined
								style={{
									fontSize: "30px",
									cursor: "pointer",
								}}
							/>
						</p>
						<p>Chia sẻ: Zalo | Messenger | Link</p>
					</div>
				</Col>

				<Col span={6} className="DocumentsSaved__item">
					<img
						src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"
						alt="image"
					/>

					<div className="DocumentsSaved__item-content">
						<p>
							Branding Guidelines |{" "}
							<DownloadOutlined
								style={{
									fontSize: "30px",
									cursor: "pointer",
								}}
							/>
						</p>
						<p>Chia sẻ: Zalo | Messenger | Link</p>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default LatestDocuments;
