import React from "react";
import DocumentsSaved from "./saved/DocumentsSaved";
import DocumentsSalesHeader from "./Header";
import DocumentsSalesCart from "./cart";
import DocumentsSalesCategories from "./category";
import DocumentsSalesShowInformation from "./show-info";
import DocumentsSalesMediaMaterial from "./media-material";
import DocumentsSalesIndentifier from "./indentifier";
import { useState } from "react";
import { useMemo } from "react";
import LatestDocuments from "./latest-documents";
import DocumentsSalesSection from "./documents";

export const DocumentsSalesContext = React.createContext({});

const DocumentsSales = () => {
	const [projectName, setProjectName] = useState("");

	const onChangeProjectName = (value) => {
		setProjectName(value);
	};

	const contextValues = useMemo(() => {
		return {
			projectName,
			setProjectName,
			onChangeProjectName,
		};
	}, [projectName, setProjectName, onChangeProjectName]);

	return (
		<DocumentsSalesContext.Provider value={contextValues}>
			<section className="DocumentsSales">
				<DocumentsSalesHeader />
				<div className="DocumentsSales__inner">
					<DocumentsSaved />
					<DocumentsSalesCategories />
					<DocumentsSalesCart />
					<DocumentsSalesSection />
					<DocumentsSalesShowInformation />
					<DocumentsSalesMediaMaterial />
					<DocumentsSalesIndentifier />
					<LatestDocuments />
				</div>
			</section>
		</DocumentsSalesContext.Provider>
	);
};

export default DocumentsSales;
