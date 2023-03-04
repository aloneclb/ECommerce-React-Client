import { useState } from 'react';
import { Button, Menu } from 'antd';
import {
	AppstoreOutlined,
	ContainerOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	PieChartOutlined } from '@ant-design/icons';


function getItem(label, key, icon, children, type) {
	return {
		key,
		icon,
		children,
		label,
		type,
	};
}

const items = [
	getItem('Dashboard', '1', <AppstoreOutlined />),
	getItem('Dashboard', '2', <AppstoreOutlined />),
	getItem('Dashboard', '3', <PieChartOutlined />),
	getItem('Ürün Yönetimi', 'sub1', <ContainerOutlined />, [
		getItem('Ürünler', '5'),
		getItem('Option 6', '6'),
		getItem('Option 7', '7'),
		getItem('Option 8', '8'),
	]),
	getItem('Sipariş Yönetimi', 'sub2', <ContainerOutlined />, [
		getItem('Option 9', '9'),
		getItem('Option 10', '10'),
		getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
	]),
	getItem('Üye Yönetimi', 'sub2', <ContainerOutlined />, [
		getItem('Option 9', '9'),
		getItem('Option 10', '10'),
		getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
	]),
];


const SidebarLayout = () => {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<div>
			<div className="logo"/>
			<Menu defaultSelectedKeys={['1']}
				defaultOpenKeys={['sub1']}
				mode="inline"
				theme="light"
				inlineCollapsed={collapsed}
				items={items} />
		</div>
  )
}

export default SidebarLayout



	// const toggleCollapsed = () => {
	// 	setCollapsed(!collapsed);
	//  };
			{/* <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
				{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
			</Button> */}