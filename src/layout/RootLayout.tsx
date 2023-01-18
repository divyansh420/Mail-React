import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';

const StyledMailBox = styled.div`
	display: grid;
	grid-template-columns: 10vw auto;
	padding-inline: 2em;
	height: 100%;
`;
const RootLayout = () => {
	return (
		<>
			<Header />
			<StyledMailBox>
				<SideNavBar />
				<Outlet />
			</StyledMailBox>
		</>
	);
};

export default RootLayout;
