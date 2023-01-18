import styled from '@emotion/styled';
import axios from 'axios';
import { Outlet, useLoaderData } from 'react-router-dom';
import List from '../components/List';

const StyledMailCategory = styled.div`
	display: grid;
	grid-template-columns: 25vw auto;
`;
const MailCategoryLayout = () => {
	const { emails } = useLoaderData();
	return (
		<StyledMailCategory>
			<List emails={emails} />
			<Outlet />
		</StyledMailCategory>
	);
};

export const loadEmails = ({ params }) => {
	return axios(`../../data/${params.emailCategory}.json`).then(res => res.data);
};
export default MailCategoryLayout;
