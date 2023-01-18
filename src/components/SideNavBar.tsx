import { Link, NavLink, Outlet, useLoaderData } from 'react-router-dom';
import styled from '@emotion/styled';
import axios from 'axios';
import { email } from '../types';
const StyledNav = styled.nav`
	padding-inline: 0.5em 2em;
	border-inline-end: 1.5px solid;
	& > ul {
		list-style: none;

		li {
			display: flex;
			justify-content: space-between;
		}
		& a {
			font-weight: 500;
		}
	}
`;

const SideNavBar = () => {
	const [unreadInbox, unreadSpam] = useLoaderData() as number[];
	return (
		<StyledNav>
			<ul>
				<li>
					<NavLink to='/inbox'>Inbox</NavLink>
					<p>{unreadInbox}</p>
				</li>
				<li>
					<NavLink to='/spam'>Spam</NavLink>
					<p>{unreadSpam}</p>
				</li>
				<li>
					<NavLink to='/sent'>Sent</NavLink>
				</li>
				<li>
					<NavLink to='/drafts'>Drafts</NavLink>
				</li>
				<li>
					<NavLink to='/deleted'>Deleted</NavLink>
				</li>
			</ul>
		</StyledNav>
	);
};

export const loadUnreadCount = async (): Promise<number[]> => {
	const { data: inbox } = await axios('../../data/inbox.json');
	const { data: spam } = await axios('../../data/spam.json');
	const unreadSpam = spam.emails.filter((email: email) => email.unread).length;
	const unreadInbox = inbox.emails.filter(
		(email: email) => email.unread
	).length;
	return [unreadInbox, unreadSpam];
};
export default SideNavBar;
