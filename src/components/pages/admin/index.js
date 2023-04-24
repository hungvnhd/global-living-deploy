import React from "react";
import { Layout } from "antd";
import AdminDashboardSidebar from "./Sidebar";
import AdminDashboardContent from "./Content";
import { useMemo } from "react";
import { useState } from "react";

export const AdminContext = React.createContext({});

const AdminDashboard = () => {
	const [menuKey, setMenuKey] = useState("users");

	const handleSetMenuKey = ({ key }) => {
		setMenuKey(key);
	};

	const contextValues = useMemo(() => {
		return {
			menuKey,
			setMenuKey,
			handleSetMenuKey,
		};
	}, [menuKey, setMenuKey, handleSetMenuKey]);

	return (
		<AdminContext.Provider value={contextValues}>
			<Layout
				style={{
					minHeight: "100vh",
				}}
			>
				<AdminDashboardSidebar />
				<AdminDashboardContent />
			</Layout>
		</AdminContext.Provider>
	);
};

export default AdminDashboard;
