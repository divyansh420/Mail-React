import React from 'react';
import './EmailList.css';
import EmailRow from './EmailRow';

function Deleted() {
  return (
    <div className='email-list'>
        <EmailRow 
            title="Netflix Subscription"
            subject="Hello User"
            description="Update Regarding your subscription"
            time="12:00 AM"
        />
    </div>
  )
}

export default Deleted