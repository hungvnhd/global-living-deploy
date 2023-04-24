import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const productList = [
	{
		name: "Căn hộ 1 phòng ngủ",
	},
	{
		name: "Căn hộ 2 phòng ngủ",
	},
	{
		name: "Căn hộ 3 phòng ngủ",
	},
	{
		name: "Căn hộ 4 phòng ngủ",
	},
	{
		name: "Căn hộ Studio",
	},
];

const Contact = () => {
	const router = useRouter();
	const { register, handleSubmit, reset } = useForm();
	const [showDropdown, setShowDropdown] = useState(false);
	const [product, setProduct] = useState("");

	const onSubmit = (data) => {
		const values = {
			...data,
			product,
		};
		axios
			.post(
				`https://global-living-backend.vercel.app/api/v1/customerinfo`,
				values
			)
			.then((response) => {
				if (response?.status === 200) {
					router.push("/register-success");
					reset();
				}
			});
	};

	return (
		<section className="Contact">
			<div className="Contact__inner">
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						type="text"
						placeholder="Họ và tên"
						required
						{...register("full_name")}
					/>
					<input
						type="email"
						placeholder="Email"
						required
						{...register("email")}
					/>
					<input
						type="text"
						placeholder="Số điện thoại"
						required
						{...register("phone")}
					/>

					<div className="dropdown">
						<label
							htmlFor="check-select"
							onClick={() => setShowDropdown((prev) => !prev)}
						>
							{product !== "" ? product : "Sản phẩm quan tâm"}
						</label>

						<div
							className={`dropdown-list ${
								showDropdown ? "active" : ""
							}`}
							onClick={() => setShowDropdown(false)}
						>
							{productList.map((item, index) => {
								return (
									<div
										key={index}
										className="dropdown-list__item"
										onClick={() => setProduct(item?.name)}
									>
										{item?.name}
									</div>
								);
							})}
						</div>
					</div>
					<input type="submit" value="Đăng ký" />
				</form>
				<div className="Contact__detail">
					<h2>CONTACT</h2>
					<p>
						Hãy để Global Living đồng hành cùng bạn trên hành trình
						đầu tư bất động sản quốc tế và trở thành một công dân
						đẳng cấp toàn cầu
					</p>
				</div>
			</div>
		</section>
	);
};

export default Contact;
