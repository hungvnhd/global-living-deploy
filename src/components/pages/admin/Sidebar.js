import React from "react";
import { Layout, Menu } from "antd";
import { useContext } from "react";
import { AdminContext } from ".";

const { Sider } = Layout;

function getItem(label, key, icon, children) {
	return {
		key,
		icon,
		children,
		label,
	};
}

const AdminDashboardSidebar = () => {
	const { handleSetMenuKey } = useContext(AdminContext);

	const items = [
		getItem("Users", "users"),
		getItem("Customers", "customers"),
	];

	return (
		<Sider width={280}>
			<Menu
				theme="dark"
				defaultSelectedKeys={["users"]}
				mode="inline"
				items={items}
				onClick={handleSetMenuKey}
			/>
		</Sider>
	);
};

export default AdminDashboardSidebar;
