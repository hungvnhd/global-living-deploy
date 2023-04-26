import CommonModal from "@/components/common/Modal";
import { DownloadOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { DocumentsSalesContext } from "..";
import ShowInfoItemModal from "./ShowInfoItemModal";

const DocumentsSalesShowInformation = () => {
	const { projectName } = useContext(DocumentsSalesContext);
	const [data, setData] = useState([]);
	const [open, setOpen] = useState(false);
	const [openPresentation, setOpenPresentation] = useState(false);
	const [openProgress, setOpenProgress] = useState(false);

	useEffect(() => {
		if (projectName === "hungary1") {
			setData([1, 2, 3]);
		} else {
			setData([1, 2]);
		}
	}, [projectName]);

	const handleOpenModal = (type) => {
		switch (type) {
			case "presentation":
				setOpenPresentation(true);
				break;
			case "progress":
				setOpenProgress(true);
				break;
			case "":
			default:
				break;
		}
	};

	const handleCloseModalPresentation = () => {
		setOpenPresentation(false);
	};

	const handleCloseModalProgress = () => {
		setOpenProgress(false);
	};

	return (
		<div className="DocumentsSales__saved">
			<h2>Thông tin chương trình</h2>

			<Row wrap gutter={50}>
				<Col span={6} className="DocumentsSaved__item">
					<img
						src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"
						alt="image"
						onClick={() => handleOpenModal("")}
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
						onClick={() => handleOpenModal("")}
					/>

					<div className="DocumentsSaved__item-content">
						<p>
							Q&A |{" "}
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
						onClick={() => handleOpenModal("progress")}
					/>

					<div className="DocumentsSaved__item-content">
						<p>
							Quy trình & thủ tục |{" "}
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
						onClick={() => handleOpenModal("presentation")}
					/>

					<div className="DocumentsSaved__item-content">
						<p>
							Bài thuyết trình |{" "}
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
						onClick={() => handleOpenModal("")}
					/>

					<div className="DocumentsSaved__item-content">
						<p>
							Các thông tin tham khảo về chương trình |{" "}
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
						onClick={() => handleOpenModal("")}
					/>

					<div className="DocumentsSaved__item-content">
						<p>
							Khảo sát Hungary |{" "}
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

			<CommonModal open={openProgress} onClose={handleCloseModalProgress}>
				<div className="custom-modal-inner">
					<h2>Quy trình & thủ tục</h2>
					<h2>Quy trình và tiến độ</h2>
					<Row gutter={12}>
						<Col span={12} style={{ marginBottom: "30px" }}>
							<div className="CartItemModal">
								<img
									src="/images/lau_dai_thanh_thang_ninh_binh_9.jpg"
									alt="image"
								/>

								<div className="CartItemModal__detail">
									<h2>Quy trình đầu tư</h2>
									<DownloadOutlined
										style={{
											fontSize: "30px",
											cursor: "pointer",
										}}
									/>
									<p>Chia sẻ qua</p>
									<p>Zalo | Messenger | Link</p>
								</div>
							</div>
						</Col>

						<Col span={12} style={{ marginBottom: "30px" }}>
							<div className="CartItemModal">
								<img
									src="/images/lau_dai_thanh_thang_ninh_binh_9.jpg"
									alt="image"
								/>

								<div className="CartItemModal__detail">
									<h2>Chi phí và tiến độ thanh toán</h2>
									<DownloadOutlined
										style={{
											fontSize: "30px",
											cursor: "pointer",
										}}
									/>
									<p>Chia sẻ qua</p>
									<p>Zalo | Messenger | Link</p>
								</div>
							</div>
						</Col>
					</Row>

					<h2>Hướng dẫn thuế & phí</h2>
					<Row gutter={12}>
						<Col span={12} style={{ marginBottom: "30px" }}>
							<div className="CartItemModal">
								<img
									src="/images/lau_dai_thanh_thang_ninh_binh_9.jpg"
									alt="image"
								/>

								<div className="CartItemModal__detail">
									<h2>Hướng dẫn về thuế & phí</h2>
									<DownloadOutlined
										style={{
											fontSize: "30px",
											cursor: "pointer",
										}}
									/>
									<p>Chia sẻ qua</p>
									<p>Zalo | Messenger | Link</p>
								</div>
							</div>
						</Col>

						<Col span={12} style={{ marginBottom: "30px" }}>
							<div className="CartItemModal">
								<img
									src="/images/lau_dai_thanh_thang_ninh_binh_9.jpg"
									alt="image"
								/>

								<div className="CartItemModal__detail">
									<h2>Thuế BDS Hungary</h2>
									<DownloadOutlined
										style={{
											fontSize: "30px",
											cursor: "pointer",
										}}
									/>
									<p>Chia sẻ qua</p>
									<p>Zalo | Messenger | Link</p>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</CommonModal>

			<CommonModal
				open={openPresentation}
				onClose={handleCloseModalPresentation}
			>
				<div className="custom-modal-inner">
					<h2>Thông tin chương trình | Bài thuyết trình</h2>
					<Row gutter={12}>
						<Col span={12} style={{ marginBottom: "30px" }}>
							<div className="CartItemModal">
								<img
									src="/images/lau_dai_thanh_thang_ninh_binh_9.jpg"
									alt="image"
								/>

								<div className="CartItemModal__detail">
									<h2>Video đầu chương trình</h2>
									<DownloadOutlined
										style={{
											fontSize: "30px",
											cursor: "pointer",
										}}
									/>
									<p>Chia sẻ qua:</p>
									<p>Zalo | Messenger | Link</p>
								</div>
							</div>
						</Col>

						<Col span={12} style={{ marginBottom: "30px" }}>
							<div className="CartItemModal">
								<img
									src="/images/lau_dai_thanh_thang_ninh_binh_9.jpg"
									alt="image"
								/>

								<div className="CartItemModal__detail">
									<h2>PPT 130423</h2>
									<DownloadOutlined
										style={{
											fontSize: "30px",
											cursor: "pointer",
										}}
									/>
									<p>Chia sẻ qua:</p>
									<p>Zalo | Messenger | Link</p>
								</div>
							</div>
						</Col>

						<Col span={12} style={{ marginBottom: "30px" }}>
							<div className="CartItemModal">
								<img
									src="/images/lau_dai_thanh_thang_ninh_binh_9.jpg"
									alt="image"
								/>

								<div className="CartItemModal__detail">
									<h2>PPT 080423</h2>
									<DownloadOutlined
										style={{
											fontSize: "30px",
											cursor: "pointer",
										}}
									/>
									<p>Chia sẻ qua:</p>
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

export default DocumentsSalesShowInformation;
