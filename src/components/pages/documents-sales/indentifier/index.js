import { DownloadOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { DocumentsSalesContext } from "..";
import DocumentsSalesItem from "../SalesItem";

const DocumentsSalesIndentifier = () => {
	const { projectName } = useContext(DocumentsSalesContext);
	const [data, setData] = useState([]);

	useEffect(() => {
		if (projectName === "hungary1") {
			setData([1, 2, 3]);
		} else {
			setData([1, 2]);
		}
	}, [projectName]);

	return (
		<div className="DocumentsSales__saved">
			<h2>Bộ nhận diện</h2>

			<Row wrap gutter={50}>
				<Col span={6} className="DocumentsSaved__item">
					<Link
						href={
							"https://drive.google.com/drive/folders/1ZlbuMuSjTVY8Uu9yVypOznQ1Kh5fCR1G?usp=sharing"
						}
						target="_blank"
					>
						<img
							src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"
							alt="image"
						/>
					</Link>

					<div className="DocumentsSaved__item-content">
						<p>
							Logo |{" "}
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
					<Link
						href={
							"https://drive.google.com/file/d/1r9mUB579425cq0h9jlzJr_8G85OAeRF8/view?usp=sharing"
						}
						target="_blank"
					>
						<img
							src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"
							alt="image"
						/>
					</Link>

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

export default DocumentsSalesIndentifier;
