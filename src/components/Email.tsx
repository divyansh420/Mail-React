import styled from '@emotion/styled';
import axios from 'axios';
import { Params, useLoaderData, useParams } from 'react-router-dom';
import { email } from '../types';

const StyledEmail = styled.div`
	& > div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-block-end: 1.8rem;

		h2 {
			font-family: 'Montserrat', sans-serif;
			font-weight: 700;
			text-transform: capitalize;
		}
		.controls {
			display: flex;
			gap: 1rem;

			button {
				border: none;
				cursor: pointer;
				background-color: var(--midnight-blue);
				padding: 0.3em 1em;
				color: #fff;
				span {
					vertical-align: middle;
				}
			}
		}
	}
`;
const Email = () => {
	const email = useLoaderData() as email;
	const { emailCategory, emailID } = useParams();

	const handleRead = async () => {
		const { data } = await axios(`../../data/${emailCategory}.json`);
		const emailIndex = data.emails.findIndex(
			(email: email) => email.mId === emailID
		);
		data.emails[emailIndex].unread = false;
		axios.put(`../../data/${emailCategory}`, data);
	};

	const handleDelete = async () => {
		const { data } = await axios(`../../data/${emailCategory}.json`);
		const filteredEmails = data.emails.filter(
			(email: email) => email.mId !== emailID
		);
		axios.put(`../../data/${emailCategory}.json/emails`, filteredEmails);
	};
	return (
		<StyledEmail>
			<div>
				<h2>{email.subject}</h2>
				<div className='controls'>
					{email.unread && (
						<button onClick={handleRead}>
							Mark as Read{' '}
							<span className='material-symbols-outlined'>check</span>
						</button>
					)}
					<button onClick={handleDelete}>
						Delete <span className='material-symbols-outlined'>delete</span>
					</button>
				</div>
			</div>
			<p>{email.content}</p>
		</StyledEmail>
	);
};

export const loadEmail = async ({
	params,
}: {
	params: Params;
}): Promise<email> => {
	const { data } = await axios(`../../data/${params.emailCategory}.json`);
	return data.emails.find((email: email) => email.mId === params.emailID);
};
export default Email;
