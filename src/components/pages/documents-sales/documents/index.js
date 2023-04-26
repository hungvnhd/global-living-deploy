import CommonModal from "@/components/common/Modal";
import { DownloadOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { DocumentsSalesContext } from "..";
import DocumentsSalesItem from "../SalesItem";
import DocumentsItem from "./DocumentsItemModal";

const DocumentsSalesSection = () => {
	const router = useRouter();
	const { projectName } = useContext(DocumentsSalesContext);
	const [data, setData] = useState([]);
	const [openFlyer, setOpenFlyer] = useState(false);
	const [openSalesKit, setOpenSalesKit] = useState(false);

	useEffect(() => {
		if (projectName === "hungary1") {
			setData([1, 2, 3]);
		} else {
			setData([1, 2]);
		}
	}, [projectName]);

	const handleOpenModal = (type) => {
		if (type === "flyer") {
			setOpenFlyer(true);
		} else if (type === "salesKit") {
			setOpenSalesKit(true);
		}
	};

	const handleCloseModalFlyer = () => {
		setOpenFlyer(false);
	};

	const handleCloseModalSalesKit = () => {
		setOpenSalesKit(false);
	};

	return (
		<div className="DocumentsSales__saved">
			<h2>Tài liệu bán hàng</h2>

			<Row wrap gutter={50}>
				<Col span={6} className="DocumentsSaved__item">
					<img
						src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"
						alt="image"
						onClick={() => handleOpenModal("salesKit")}
					/>

					<div className="DocumentsSaved__item-content">
						<p>
							Sales kit |{" "}
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
						onClick={() => handleOpenModal("flyer")}
					/>

					<div className="DocumentsSaved__item-content">
						<p>
							Flyer |{" "}
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

			<CommonModal open={openFlyer} onClose={handleCloseModalFlyer}>
				<div className="custom-modal-inner">
					<h2>Tài liệu bán hàng | Flyer</h2>
					<Row gutter={30}>
						<Col span={12} className="CartItemModal">
							<Link
								href={
									"https://drive.google.com/file/d/1H9VssdDfsw8MmoYhvBOkZIMscRMZQV_E/view?usp=sharing"
								}
								target="_blank"
							>
								<img
									src="/images/lau_dai_thanh_thang_ninh_binh_9.jpg"
									alt="image"
								/>
							</Link>

							<div className="CartItemModal__detail">
								<h2>Flyer ver 1</h2>
								<DownloadOutlined
									style={{
										fontSize: "30px",
										cursor: "pointer",
									}}
								/>
								<p>Chia sẻ qua:</p>
								<p>Zalo | Messenger | Link</p>
							</div>
						</Col>

						<Col span={12} className="CartItemModal">
							<Link
								href={
									"https://drive.google.com/file/d/1EyWM2fsfdPEa_cnGhAJgIV30jhQosPJi/view?usp=sharing"
								}
								target="_blank"
							>
								<img
									src="/images/lau_dai_thanh_thang_ninh_binh_9.jpg"
									alt="image"
								/>
							</Link>

							<div className="CartItemModal__detail">
								<h2>Flyer ver 2</h2>
								<DownloadOutlined
									style={{
										fontSize: "30px",
										cursor: "pointer",
									}}
								/>
								<p>Chia sẻ qua:</p>
								<p>Zalo | Messenger | Link</p>
							</div>
						</Col>
					</Row>
				</div>
			</CommonModal>

			<CommonModal open={openSalesKit} onClose={handleCloseModalSalesKit}>
				<div className="custom-modal-inner">
					<h2>Tài liệu bán hàng | Sales kit</h2>
					<Row gutter={12}>
						<Col span={12} className="CartItemModal">
							<Link
								href={
									"https://drive.google.com/file/d/1OH8eRGVp0EBFtgOLsPZ7bGH7U5GV3JJb/view?usp=sharing"
								}
								target="_blank"
							>
								<img
									src="/images/lau_dai_thanh_thang_ninh_binh_9.jpg"
									alt="image"
								/>
							</Link>

							<div className="CartItemModal__detail">
								<h2>Flyer ver 1</h2>
								<DownloadOutlined
									style={{
										fontSize: "30px",
										cursor: "pointer",
									}}
								/>
								<p>Chia sẻ qua:</p>
								<p>Zalo | Messenger | Link</p>
							</div>
						</Col>
					</Row>
				</div>
			</CommonModal>
		</div>
	);
};

export default DocumentsSalesSection;
