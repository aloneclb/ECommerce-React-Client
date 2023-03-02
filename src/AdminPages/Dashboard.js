import "./dashboard.scss"
import React from 'react'
import { Outlet } from 'react-router-dom'

function DashboardPage() {
   return (
		<div>
			<p>Dashboard Sayfası</p>
			<Outlet />
		</div>
   )
}

export default DashboardPage
