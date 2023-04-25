import React, { useContext, useEffect, useState } from "react";
import { DocumentsSalesContext } from "..";
import DocumentsSalesItem from "../SalesItem";

const DocumentsSalesMediaMaterial = () => {
	const { projectName } = useContext(DocumentsSalesContext);
	const [data, setData] = useState([]);

	useEffect(() => {
		if (projectName === "hungary1") {
			setData([1, 2, 3]);
		} else {
			setData([1, 2]);
		}
	}, [projectName]);

	return (
		<div className="DocumentsSales__saved">
			<h2>Tư liệu truyền thông</h2>

			<div className="DocumentsSaved__list">
				{data?.map((item, index) => {
					return <DocumentsSalesItem />;
				})}
			</div>
		</div>
	);
};

export default DocumentsSalesMediaMaterial;
