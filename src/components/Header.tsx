import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
	padding: 1em 2em;
	margin-block-end: 1rem;
	background-color: var(--midnight-blue);

	a {
		font-size: calc(2 * var(--16px));
	}
`;

const Header = () => {
	return (
		<StyledHeader>
			<Link to='/'>Mail-React</Link>
		</StyledHeader>
	);
};

export default Header;
