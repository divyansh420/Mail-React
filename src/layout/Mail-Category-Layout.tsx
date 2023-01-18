import styled from '@emotion/styled';
import axios from 'axios';
import { Outlet, Params, useLoaderData } from 'react-router-dom';
import List from '../components/List';
import { email } from '../types';

const StyledMailCategory = styled.div`
	display: grid;
	grid-template-columns: 35% auto;
`;
const MailCategoryLayout = () => {
	const { emails } = useLoaderData() as { emails: email[] };
	return (
		<StyledMailCategory>
			<List emails={emails} />
			<Outlet />
		</StyledMailCategory>
	);
};

export const loadEmails = async ({
	params,
}: {
	params: Params;
}): Promise<{ emails: email[] }> => {
	const res = await axios(`../../data/${params.emailCategory}.json`);
	return res.data;
};
export default MailCategoryLayout;
