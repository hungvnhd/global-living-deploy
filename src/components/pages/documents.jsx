import { Navbar } from "@/components/common";
import { useState } from "react";

export default function Documents() {
	const [selectedOption, setSelectedOption] = useState("");

	const handleSelectChange = (event) => {
		setSelectedOption(event.target.value);
	};
	return (
		<div>
			<Navbar />
			<div className="documents-container">
				<div>
					<span style={{ color: "#FFCD29" }}>Tài liệu đã lưu về</span>
					<button style={{ backgroundColor: "#FFCD29" }}>
						Hungary
					</button>
				</div>
				<div className="document-salekits">
					<img
						src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"
						alt=""
					/>
					<img
						src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"
						alt=""
					/>
					<img
						src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"
						alt=""
					/>
				</div>
				<div className="documents-projects">
					<select name="menu" id="menu" onChange={handleSelectChange}>
						<option value="giohang">Giỏ hàng</option>
						<option value="tailieubanhang">
							Tài liệu bán hàng
						</option>
						<option value="thongtinchuongtrinh">
							Thông tin chương trình
						</option>
						<option value="tulieutruyenthong">
							Tư liệu truyền thông
						</option>
						<option value="bonhandien">Bộ nhận diện</option>
					</select>
				</div>
				<div
					className="documents-giohang"
					style={{
						display:
							selectedOption === "giohang" ? "block" : "none",
					}}
				>
					<div style={{ color: "#FFCD29" }}>Giỏ Hàng</div>
					<div style={{ display: "flex", gap: "20px" }}>
						<img
							src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"
							data-bs-toggle="modal"
							data-bs-target="#exampleModal"
							alt=""
						/>
						<img
							src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"
							data-bs-toggle="modal"
							data-bs-target="#exampleModal"
							alt=""
						/>
						<img
							src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"
							data-bs-toggle="modal"
							data-bs-target="#exampleModal"
							alt=""
						/>
					</div>

					<div
						class="modal fade"
						id="exampleModal"
						tabindex="-1"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true"
					>
						<div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable modal-custom">
							<div class="modal-content">
								<div class="modal-body">
									<div className="documents-giohang__chitiet">
										<div>
											<span style={{ color: "#FFCD29" }}>
												{" "}
												Căn A
											</span>
											<button>Nút lưu tài liệu</button>
										</div>
										<div className="giohang-chitiet">
											<div className="giohang-chitiet-left">
												<img
													src="/img/template.png"
													alt=""
												/>
											</div>
											<div className="giohang-chitiet-right">
												<div className="giohang-chitiet-right__general">
													Thông tin chung: <br />
													Diện tích: 45m vuông <br />
													Loại hình: Căn hộ Studio{" "}
													<br />
													01 phòng ngủ với giường đôi{" "}
													<br />
													01 phòng bếp đủ tiện nghi{" "}
													<br />
													01 phòng khách và 01 phòng
													tắm <br />
												</div>
												<div className="giohang-chitiet-right__tienich">
													<p>Tiện ích</p>
													Thang máy, điều hòa, hệ
													thống sưởi
												</div>
												<div className="giohang-chitiet-right__doanhthu">
													<p>6000 Euro/tháng</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className="documents-tailieu"
					style={{
						display:
							selectedOption === "tailieubanhang"
								? "block"
								: "none",
					}}
				>
					<p style={{ color: "#FFCD29" }}>Tài liệu bán hàng</p>
					<div className="documents-tailieu__flyer">
						<img
							src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"
							data-bs-toggle="modal"
							data-bs-target="#modal2"
							alt=""
						/>
						<div
							class="modal fade"
							id="modal2"
							tabindex="-1"
							aria-labelledby="exampleModalLabel"
							aria-hidden="true"
						>
							<div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable modal-custom">
								<div class="modal-content">
									<div class="modal-body">
										<div className="document-tailieu__template">
											<img
												src="/img/template1.png"
												alt=""
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className="documents-thongtinchuongtrinh"
					style={{
						display:
							selectedOption === "thongtinchuongtrinh"
								? "block"
								: "none",
					}}
				>
					<p style={{ color: "#FFCD29" }}>Thông tin chương trình</p>
					<div className="document-thongtinchuongtrinh__buttons">
						<img
							src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"
							alt=""
						/>
						<img
							src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"
							alt=""
						/>
						<img
							src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"
							alt=""
						/>
					</div>
				</div>
				<div
					className="documents-tulieutruyenthong"
					style={{
						display:
							selectedOption === "tulieutruyenthong"
								? "block"
								: "none",
					}}
				>
					<p style={{ color: "#FFCD29" }}>Tư liệu truyền thông</p>
					<div className="documents-tulieutruyenthong__buttons">
						<div style={{ display: "flex", gap: "20px" }}>
							<img
								src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"
								data-bs-toggle="modal"
								data-bs-target="#modal3"
								alt=""
							/>
							<img
								src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"
								data-bs-toggle="modal"
								data-bs-target="#modal3"
								alt=""
							/>
							<img
								src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"
								data-bs-toggle="modal"
								data-bs-target="#modal3"
								alt=""
							/>
						</div>

						<div
							class="modal fade"
							id="modal3"
							tabindex="-1"
							aria-labelledby="exampleModalLabel"
							aria-hidden="true"
						>
							<div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable modal-custom">
								<div class="modal-content">
									<div class="modal-body">
										<div className="document-tulieu__template">
											<img
												src="/img/template2.png"
												alt=""
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className="documents-bonhandien"
					style={{
						display:
							selectedOption === "bonhandien" ? "block" : "none",
					}}
				>
					<p style={{ color: "#FFCD29" }}>Bộ nhận diện</p>
					<div className="documents-tulieutruyenthong__buttons">
						<div style={{ display: "flex", gap: "20px" }}>
							<img
								src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"
								data-bs-toggle="modal"
								data-bs-target="#modal4"
								alt=""
							/>
							<img
								src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"
								data-bs-toggle="modal"
								data-bs-target="#modal4"
								alt=""
							/>
						</div>

						{/* <div
              class="modal fade"
              id="modal4"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable modal-custom">
                <div class="modal-content">
                  <div class="modal-body">
                    <div className="document-tulieu__template">
                      <img src="/img/template2.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
					</div>
				</div>
			</div>
		</div>
	);
}
