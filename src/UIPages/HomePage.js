import React from 'react'
import { Outlet } from 'react-router-dom'
import { Button } from 'antd';

function HomePage() {
	return (
		<div>
			Home Page
			<Button type="primary" href='/admin'>Primary Button</Button>
			<Outlet />
		</div>
  )
}

export default HomePage
