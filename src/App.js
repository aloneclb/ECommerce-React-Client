import './App.css';
import { Routes, Route } from "react-router-dom";
import AdminPage from './Admin/AdminPage';
import HomePage from './UIPages/HomePage';
import ExamplePage from './AdminPages/ExamplePage';
import ProductListPage from './AdminPages/Product/ProductListPage';
import ProductAddPage from './AdminPages/Product/ProductAddPage';


export const AdminRoutes = {
	admin: {
		root: 'admin',
		products: {
			root: 'products',
			add: 'add',
			edit: 'edit',
			delete: 'delete'
		},
	},
}

function App() {
	return (
		<div>

			<Routes>
				{/* Home Pages */}
				<Route path='/' element={<HomePage />}>
				</Route>

				{/* Admin Pages */}
				<Route path={AdminRoutes.admin.root} element={<AdminPage />}>
					<Route path='example-page' element={<ExamplePage />}></Route>
					
					{/* Products Route */}
					<Route path={AdminRoutes.admin.products.root}>
						<Route path='' element={<ProductListPage />}></Route>
						<Route path={AdminRoutes.admin.products.add} element={<ProductAddPage />}></Route>
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
            