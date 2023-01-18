import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import SideNavBar from './SideNavBar';
const StyledMailBox = styled.div`
	display: grid;
	grid-template-columns: max-content 3fr 6fr;
	padding-inline: 2em;
	&:last-child {
		flex-grow: 1;
	}
`;
const MailBox = () => {
	return (
		<StyledMailBox>
			<SideNavBar />
		</StyledMailBox>
	);
};

export default MailBox;
