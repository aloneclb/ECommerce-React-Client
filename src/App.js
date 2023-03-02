import './App.css';
import { Routes, Route, Link, NavLink } from "react-router-dom";
import DashboardPage from "./AdminPages/Dashboard";
import HomePage from './UIPages/HomePage';

function App() {
	return (
		<div className="App">
			<Routes>
				{/* Home Pages */}
				<Route path='/' element={<HomePage />}>

				</Route>


				{/* Admin Pages */}
				<Route path='/admin' element={<DashboardPage />}>
					
				</Route>
			</Routes>

		</div>
	);
}

export default App;


// {/* <Route path='/contact' element={<ContactPage />} /> */}
				
//	{/* Alt url'ler eklemek için */}
//	<Route path='/blog' element={<BlogPage />}>
//		<Route path='categories' element={<CategoriesPage />}></Route>
//		<Route path='post/:urlparameter'></Route>
//	</Route> 
            