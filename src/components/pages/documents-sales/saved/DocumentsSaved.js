import React from "react";
import DocumentsSalesItem from "../SalesItem";

const DocumentsSaved = () => {
	return (
		<div className="DocumentsSales__saved">
			<h2>
				Tài liệu đã lưu về:
				<p>Hungary</p>
			</h2>

			<div className="DocumentsSaved__list">
				{[1, 2, 3].map((item, index) => {
					return <DocumentsSalesItem />;
				})}
			</div>
		</div>
	);
};

export default DocumentsSaved;
