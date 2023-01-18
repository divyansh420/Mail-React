import styled from '@emotion/styled';
import { NavLink, useParams } from 'react-router-dom';
import { email } from '../types';

const StyledList = styled.ul`
	list-style: none;
	padding-inline: 1em;
	margin-inline-end: 1em;
	border-inline-end: 1.5px solid;
`;

type listItemProps = {
	isUnRead?: boolean;
};
const StyledListItem = styled.li<listItemProps>`
	margin-block-end: 0.3em;
	border-block-end: 1px solid;
	display: flex;
	justify-content: space-between;
	background-color: ${props => (props.isUnRead ? 'var(--pacific-blue)' : '')};

	a {
		font-weight: 600;
		min-width: 100%;
	}
`;
const ListItem = ({ email }: { email: email }) => {
	const { emailCategory } = useParams();

	return (
		<StyledListItem isUnRead={email?.unread}>
			<NavLink to={`/${emailCategory}/${email.mId}`}>{email.subject}</NavLink>
		</StyledListItem>
	);
};
const List = ({ emails }: { emails: email[] }) => {
	return (
		<StyledList>
			{emails.map(email => (
				<ListItem key={email.mId} email={email} />
			))}
		</StyledList>
	);
};

export default List;
