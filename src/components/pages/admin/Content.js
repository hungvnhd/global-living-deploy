import React from "react";
import { Layout } from "antd";
import AdminDashboardTable from "./Table";

const { Content } = Layout;

const AdminDashboardContent = () => {
	return (
		<Content style={{ padding: "20px" }}>
			<AdminDashboardTable />
		</Content>
	);
};

export default AdminDashboardContent;
