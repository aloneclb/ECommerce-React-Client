import React from 'react'
import { Outlet } from 'react-router-dom'

function DashboardPage() {
   return (
		<div>
			Dashboard Sayfası
			<Outlet />
		</div>
   )
}

export default DashboardPage
