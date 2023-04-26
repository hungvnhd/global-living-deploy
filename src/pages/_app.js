import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "@/styles/Homepage.css";
import "@/styles/CoreProduct.css";
import "@/styles/Contact.css";
import "@/styles/BusinessPartners.css";
import "@/styles/AboutUs.css";
import "@/styles/Footer.css";
import "@/styles/RegisterSuccess.css";
import "@/styles/Newpage.css";
import "@/styles/Register.css";
import "@/styles/Login.css";
import "@/styles/DetailNewsPage.css";
import "@/styles/DocumentsSales.css";
import "@/styles/CartItemModal.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		require("bootstrap/dist/js/bootstrap.bundle.min.js");
	}, []);

	return <Component {...pageProps} />;
}

export default MyApp;
