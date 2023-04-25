import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";

export default function Navbar() {
	const [navBar, setNavBar] = useState(false);

	const changeBackgroundNav = () => {
		if (window.scrollY >= 300) {
			setNavBar(true);
		} else {
			setNavBar(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", changeBackgroundNav);
	}, []);

	return (
		<nav
			className="Navbar fixed-top"
			style={
				navBar
					? {
							background: "black",
							paddingBottom: navBar ? "20px" : 0,
					  }
					: {
							background: `linear-gradient(
			                    180deg,
			                    rgba(0, 0, 0, 1) 0%,
			                    rgba(0, 0, 0, 0.5340730042016807) 57%,
			                    rgba(255, 255, 255, 0) 100%
			                )`,
					  }
			}
		>
			<div className="nav-row additional-info">
				<div className="phone">0931 626 909</div>
				<div className="icon">Facebook</div>
				<div className="icon">Zalo</div>
				<div className="icon">Youtube</div>
			</div>
			<div
				className="Navbar-container"
				style={{
					display: navBar ? "flex" : "block",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<div
					className="nav-row logo"
					style={{
						marginBottom: !navBar ? "30px" : 0,
					}}
				>
					<img src="/logo.png" alt="global-living" />
				</div>
				<div className="nav-row main-nav">
					<Link href="/">Về Global Living</Link>
					<Link
						href="https://info.globalliving-group.com/hungary?fbclid=IwAR2hyJCSClRp4e-rkqJR63DoTRQnDVBzXs0776Ead3lyjVmBK4RU8u19qWU"
						target={"_blank"}
					>
						Sản phẩm đầu tư
					</Link>
					<Link href="/tin-tuc">Tin tức</Link>
					<Link href="/tai-lieu-ban-hang">Tài liệu bán hàng</Link>
					<Link href="/login">Đăng nhập Đại lý/ CTV</Link>
				</div>
			</div>
		</nav>
	);
}
