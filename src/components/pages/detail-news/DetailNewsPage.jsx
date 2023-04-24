import { Footer } from "@/components/common";
import React from "react";
import DetailNewsPageContent from "./Content";
import DetailNewsPageHeader from "./Header";

const DetailNewsPage = () => {
	return (
		<div>
			<DetailNewsPageHeader />
			<DetailNewsPageContent />
			<Footer />
		</div>
	);
};

export default DetailNewsPage;
