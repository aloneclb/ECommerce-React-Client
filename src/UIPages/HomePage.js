import React from 'react'
import { Outlet } from 'react-router-dom'

function HomePage() {
	return (
		<div>
			Home Page
			<Outlet />
		</div>
  )
}

export default HomePage
