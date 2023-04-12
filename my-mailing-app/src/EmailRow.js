import React from 'react';
import './EmailRow.css';

function EmailRow({ id, title, subject, description, time }) {
  return (
    <div className='email-row'>
        <div className='email-row-content'>
            <div className='email-row-options'>{title}</div>
            <div className='email-row-title'>{subject}</div>
            <div className='email-row-message'>{description}</div>
            <div className='email-row-description'>{time}</div>
        </div>
    </div>
  )
}

export default EmailRow