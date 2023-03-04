import "./AdminPage.scss"
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd';
import SidebarLayout from './Layout/SidebarLayout'
import HeaderLayout from "./Layout/HeaderLayout";
const { Content, Footer, Sider } = Layout;

function AdminPage() {
	return (
	<div>
		<Layout className="admin-layout" style={{ backgroundColor: "white" }}>
			<Sider
				breakpoint="lg"
				collapsedWidth="0"
				onBreakpoint={(broken) => {
					console.log(broken);
				}}
				onCollapse={(collapsed, type) => {
					console.log(collapsed, type);
				}}
			>
				<SidebarLayout/>
			</Sider>
			<Layout className="bg-white">
				<HeaderLayout />
				<Content className="bg-white" style={{ margin: '24px 16px 0'}}>
				
					<Outlet />
				
				</Content>
				<Footer className="bg-white">Ant Design ©2023 Created by Ant UED</Footer>
			</Layout>
		</Layout>
	</div>
	)
}

export default AdminPage
