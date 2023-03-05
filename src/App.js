import './App.css';
import { Routes, Route } from "react-router-dom";
import AdminPage from './Admin/AdminPage';
import HomePage from './UIPages/HomePage';
import ExamplePage from './AdminPages/ExamplePage';
import ProductListPage from './AdminPages/Product/ProductListPage';
import ProductAddPage from './AdminPages/Product/ProductAddPage';


// const routes = []

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
					
					{/* Products Route */}
					<Route path='products/'>
						<Route path='' element={<ProductListPage />}></Route>
						<Route path='add' element={<ProductAddPage />}></Route>
						<Route path=':id' element={<ExamplePage />}></Route>
						<Route path='edit/:id' element={<ExamplePage />}></Route>
						<Route path='delete/:id' element={<ExamplePage />}></Route>
					</Route>
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
            