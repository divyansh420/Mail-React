import React from 'react';
import './EmailRow.css';
import { useNavigate } from 'react-router-dom';

function EmailRow({ id, title, subject, description, time }) {
    const navigate = useNavigate();
  return (
    <div  className='email-row'>
        <div onClick={() => navigate('/mail')} className='email-row-content'>
            <div className='email-row-options'>{title}</div>
            <div className='email-row-title'>{subject}</div>
            <div className='email-row-message'>{description}</div>
            <div className='email-row-time'>{time}</div>
        </div>
    </div>
  )
}

export default EmailRow