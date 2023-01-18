import {
	createBrowserRouter,
	RouterProvider,
	Route,
	createRoutesFromElements,
} from 'react-router-dom';
import Email, { loadEmail } from './components/Email';
import { loadUnreadCount } from './components/SideNavBar';
import MailCategoryLayout, { loadEmails } from './layout/Mail-Category-Layout';
import RootLayout from './layout/RootLayout';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<RootLayout />} loader={loadUnreadCount}>
			<Route
				path=':emailCategory'
				element={<MailCategoryLayout />}
				loader={loadEmails}
			>
				<Route
					path='/:emailCategory/:emailID'
					element={<Email />}
					loader={loadEmail}
				/>
			</Route>
		</Route>
	)
);

const App = () => <RouterProvider router={router} />;

export default App;
