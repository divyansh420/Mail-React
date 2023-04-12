import React from 'react';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate =useNavigate();
  return (
    <div className='sidebar'>
        <div onClick={() => navigate('/inbox')} className='sidebar-options'>
            <button className='sidebar-option-buttons'>Inbox</button>
        </div>
        <div onClick={() => navigate('/starred')} className='sidebar-options'>
            <button className='sidebar-option-buttons'>Starred</button>
        </div>
        <div onClick={() => navigate('/spam')} className='sidebar-options'>
            <button className='sidebar-option-buttons'>Spam</button>
        </div>
        <div onClick={() => navigate('/deleted')} className='sidebar-options'>
            <button className='sidebar-option-buttons'>Deleted Items</button>
        </div>
        <div onClick={() => navigate('/customfolder')} className='sidebar-options'>
            <button className='sidebar-option-buttons'>Custom Folder</button>
        </div>
    </div>
  )
}

export default Sidebar