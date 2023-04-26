import CommonModal from "@/components/common/Modal";
import { Col, Row } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { DocumentsSalesContext } from "..";
import DocumentsSalesItem from "../SalesItem";
import MediaMaterialItemModal from "./MediaMaterialItemModal";
import DetailItemModal from "./DetailItemModal";
import { DownloadOutlined } from "@ant-design/icons";

const DocumentsSalesMediaMaterial = () => {
	const { projectName } = useContext(DocumentsSalesContext);
	const [data, setData] = useState([]);
	const [open, setOpen] = useState(false);
	const [openDetail, setOpenDetail] = useState(false);

	useEffect(() => {
		if (projectName === "hungary1") {
			setData([1, 2, 3]);
		} else {
			setData([1, 2]);
		}
	}, [projectName]);

	const handleOpenModal = () => {
		setOpen(true);
	};

	const handleCloseModal = () => {
		setOpen(false);
	};

	const handleOpenModalDetail = () => {
		setOpenDetail(true);
	};

	const handleCloseModalDetail = () => {
		setOpenDetail(false);
	};

	return (
		<div className="DocumentsSales__saved">
			<h2>Tư liệu truyền thông</h2>

			<Row wrap gutter={50}>
				<Col span={6} className="DocumentsSaved__item">
					<img
						src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"
						alt="image"
						onClick={handleOpenModal}
					/>

					<div className="DocumentsSaved__item-content">
						<p>
							Ảnh |{" "}
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
							Video |{" "}
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
							Tư liệu thô |{" "}
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

			<CommonModal open={open} onClose={handleCloseModal}>
				<div className="custom-modal-inner">
					<h2>Ảnh</h2>
					<h2>Post Facebook</h2>
					<Row gutter={20}>
						<Col span={12}>
							<div
								className="MediaMaterialItemModal"
								style={{ cursor: "pointer" }}
							>
								<img
									src="/images/lau_dai_thanh_thang_ninh_binh_9.jpg"
									alt="image"
								/>

								<div className="CartItemModal__detail">
									<p>
										Tháng 3 |{" "}
										<DownloadOutlined
											style={{
												fontSize: "30px",
												cursor: "pointer",
											}}
										/>
									</p>
									<p>Chia sẻ: Zalo | Messenger | Link</p>
								</div>
							</div>
						</Col>
						<Col span={12}>
							<div
								className="MediaMaterialItemModal"
								style={{ cursor: "pointer" }}
								onClick={handleOpenModalDetail}
							>
								<img
									src="/images/lau_dai_thanh_thang_ninh_binh_9.jpg"
									alt="image"
								/>

								<div className="CartItemModal__detail">
									<p>
										Tháng 4 |{" "}
										<DownloadOutlined
											style={{
												fontSize: "30px",
												cursor: "pointer",
											}}
										/>
									</p>
									<p>Chia sẻ: Zalo | Messenger | Link</p>
								</div>
							</div>
						</Col>
					</Row>

					<h2>Ảnh KV</h2>
					<Row gutter={20}>
						<Col span={12}>
							<div
								className="MediaMaterialItemModal"
								style={{ cursor: "pointer" }}
								onClick={handleOpenModalDetail}
							>
								<img
									src="/images/lau_dai_thanh_thang_ninh_binh_9.jpg"
									alt="image"
								/>

								<div className="CartItemModal__detail">
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
							</div>
						</Col>

						<Col span={12}>
							<div
								className="MediaMaterialItemModal"
								style={{ cursor: "pointer" }}
								onClick={handleOpenModalDetail}
							>
								<img
									src="/images/lau_dai_thanh_thang_ninh_binh_9.jpg"
									alt="image"
								/>

								<div className="CartItemModal__detail">
									<p>
										Giới thiệu chương trình |{" "}
										<DownloadOutlined
											style={{
												fontSize: "30px",
												cursor: "pointer",
											}}
										/>
									</p>
									<p>Chia sẻ: Zalo | Messenger | Link</p>
								</div>
							</div>
						</Col>
					</Row>

					<h2>Ảnh sự kiện</h2>
					<Row gutter={20}>
						<Col span={12}>
							<div
								className="MediaMaterialItemModal"
								style={{ cursor: "pointer" }}
								onClick={handleOpenModalDetail}
							>
								<img
									src="/images/lau_dai_thanh_thang_ninh_binh_9.jpg"
									alt="image"
								/>

								<div className="CartItemModal__detail">
									<p>
										SK đào tạo HN 11.2 |{" "}
										<DownloadOutlined
											style={{
												fontSize: "30px",
												cursor: "pointer",
											}}
										/>
									</p>
									<p>Chia sẻ: Zalo | Messenger | Link</p>
								</div>
							</div>
						</Col>

						<Col span={12}>
							<div
								className="MediaMaterialItemModal"
								style={{ cursor: "pointer" }}
								onClick={handleOpenModalDetail}
							>
								<img
									src="/images/lau_dai_thanh_thang_ninh_binh_9.jpg"
									alt="image"
								/>

								<div className="CartItemModal__detail">
									<p>
										SK đào tạo HN 10.3 |{" "}
										<DownloadOutlined
											style={{
												fontSize: "30px",
												cursor: "pointer",
											}}
										/>
									</p>
									<p>Chia sẻ: Zalo | Messenger | Link</p>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</CommonModal>

			<CommonModal open={openDetail} onClose={handleCloseModalDetail}>
				<div className="custom-modal-inner">
					<h2>Ảnh | Post Facebook | Tháng 4</h2>
					<Row gutter={12} wrap>
						<Col span={12}>
							<div className="CartItemModal">
								<img
									src="/images/lau_dai_thanh_thang_ninh_binh_9.jpg"
									alt="image"
								/>

								<div className="CartItemModal__detail">
									<p>20232</p>
									<p>Icon</p>
									<p>Chia sẻ qua</p>
									<p>Zalo | Messenger | Link</p>
								</div>
							</div>
						</Col>

						<Col span={12}>
							<div className="CartItemModal">
								<img
									src="/images/lau_dai_thanh_thang_ninh_binh_9.jpg"
									alt="image"
								/>

								<div className="CartItemModal__detail">
									<p>20232</p>
									<p>Icon</p>
									<p>Chia sẻ qua</p>
									<p>Zalo | Messenger | Link</p>
								</div>
							</div>
						</Col>

						<Col span={12}>
							<div className="CartItemModal">
								<img
									src="/images/lau_dai_thanh_thang_ninh_binh_9.jpg"
									alt="image"
								/>

								<div className="CartItemModal__detail">
									<p>20232</p>
									<p>Icon</p>
									<p>Chia sẻ qua</p>
									<p>Zalo | Messenger | Link</p>
								</div>
							</div>
						</Col>

						<Col span={12}>
							<div className="CartItemModal">
								<img
									src="/images/lau_dai_thanh_thang_ninh_binh_9.jpg"
									alt="image"
								/>

								<div className="CartItemModal__detail">
									<p>20232</p>
									<p>Icon</p>
									<p>Chia sẻ qua</p>
									<p>Zalo | Messenger | Link</p>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</CommonModal>
		</div>
	);
};

export default DocumentsSalesMediaMaterial;
