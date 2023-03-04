import './App.css';
import { Routes, Route } from "react-router-dom";
import AdminPage from './Admin/AdminPage';
import HomePage from './UIPages/HomePage';
import ExamplePage from './AdminPages/ExamplePage';


const routes = []

function App() {
	return (
		<div>
			<Routes>
				{/* Home Pages */}
				<Route path='/' element={<HomePage />}>

				</Route>


				{/* Admin Pages */}
				<Route path='/admin' element={<AdminPage />}>
					<Route path='example-page' element={<ExamplePage />}></Route>
				</Route>
			</Routes>

		</div>
	);
}

export default App;


// import { Routes, Route, Link, NavLink } from "react-router-dom";
// {/* <Route path='/contact' element={<ContactPage />} /> */}
				
//	{/* Alt url'ler eklemek için */}
//	<Route path='/blog' element={<BlogPage />}>
//		<Route path='categories' element={<CategoriesPage />}></Route>
//		<Route path='post/:urlparameter'></Route>
//	</Route> 
            