import Link from "next/link";
import { useState } from "react";
export default function login() {
	const [inputEmail, setInputEmail] = useState("");
	const [inputPassword, setInputPassword] = useState("");
	const handleInputEmail = (e) => {
		setInputEmail(e.target.value);
	};
	const handleInputPassword = (e) => {
		setInputPassword(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputEmail === "" || inputPassword === "") {
			alert("Bạn cần nhập đầy đủ thông tin khi đăng nhập");
		} else {
			const data = {
				email: inputEmail,
				password: inputPassword,
			};
			async function postJSON(data) {
				try {
					const response = await fetch(
						"https://global-living-backend.vercel.app/api/v1/users/login",
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify(data),
						}
					);

					const result = await response.json();
					alert(result.message);
					if (result.message === "Đăng nhập thành công") {
						window.location.href = "/";
					}
				} catch (error) {
					console.error("Error:", error);
				}
			}
			postJSON(data);
		}
	};

	return (
		<div className="login">
			<img src="/img/logo.png" alt="logo" />
			<h1>
				BẤT ĐỘNG SẢN ĐỊNH CƯ QUỐC TẾ GIẢI PHÁP ĐẦU TƯ KHÔNG BIÊN GIỚI
			</h1>

			<form onSubmit={handleSubmit}>
				<p>Đăng nhập tài khoản</p>

				<div className="inner">
					<div className="form-item">
						<img src="Mail Account.png" />
						<input
							onChange={handleInputEmail}
							type="text"
							placeholder="Email"
							value={inputEmail}
						/>
					</div>
					<div className="divider" />
					<div className="form-item">
						<img src="Secure.png" />
						<input
							onChange={handleInputPassword}
							type="text"
							placeholder="Mật khẩu"
							value={inputPassword}
						/>
					</div>
				</div>

				<input
					type={"submit"}
					value="Đăng nhập"
					className="submit-btn"
				/>
			</form>

			<div className="navigate">
				<p>Chưa có tài khoản?</p>
				<Link href={"/register"}>{`Đăng ký ngay ->`}</Link>
			</div>
		</div>
	);
}
