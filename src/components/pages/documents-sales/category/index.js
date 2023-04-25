import React, { useContext } from "react";
import { DocumentsSalesContext } from "..";

const projects = [
	{
		key: "hungary1",
		name: "Hungary 1",
	},
	{
		key: "hungary2",
		name: "Hungary 2",
	},
];

const DocumentsSalesCategories = () => {
	const { onChangeProjectName } = useContext(DocumentsSalesContext);

	return (
		<div className="DocumentsSales__saved">
			<h2>
				Dự án bất động sản:
				{projects?.map((item, index) => (
					<p
						key={item?.key}
						onClick={() => onChangeProjectName(item?.key)}
					>
						{item?.name}
					</p>
				))}
			</h2>
		</div>
	);
};

export default DocumentsSalesCategories;
