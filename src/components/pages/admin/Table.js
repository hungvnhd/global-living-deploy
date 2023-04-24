import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AdminContext } from ".";

const AdminDashboardTable = () => {
	const { menuKey } = useContext(AdminContext);
	const [dataSource, setDataSource] = useState([]);
	const [loading, setLoading] = useState(false);

	const columns = [
		{
			title: "Họ và tên",
			dataIndex: "full_name",
			key: "full_name",
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
		},
		{
			title: "Số điện thoại",
			dataIndex: "phone",
			key: "phone",
		},
		{
			title: "Sản phẩm",
			dataIndex: "product",
			key: "product",
		},
	];

	useEffect(() => {
		if (menuKey === "users") {
			setLoading(true);
			axios
				.get(
					`https://global-living-backend.vercel.app/api/v1/customerinfo`
				)
				.then((response) => {
					setLoading(false);
					setDataSource(response?.data?.users);
				})
				.catch(() => setLoading(false));
		} else if (menuKey === "customers") {
			setLoading(true);
			axios
				.get(
					`https://global-living-backend.vercel.app/api/v1/customerinfo`
				)
				.then((response) => {
					setLoading(false);
					setDataSource([]);
				})
				.catch(() => setLoading(false));
		}
	}, [menuKey]);

	return (
		<Table dataSource={dataSource} columns={columns} loading={loading} />
	);
};

export default AdminDashboardTable;
