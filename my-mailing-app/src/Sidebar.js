import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar-options'>
            <button className='sidebar-option-buttons'>Inbox</button>
        </div>
        <div className='sidebar-options'>
            <button className='sidebar-option-buttons'>Starred</button>
        </div>
        <div className='sidebar-options'>
            <button className='sidebar-option-buttons'>Spam</button>
        </div>
        <div className='sidebar-options'>
            <button className='sidebar-option-buttons'>Deleted Items</button>
        </div>
        <div className='sidebar-options'>
            <button className='sidebar-option-buttons'>Create Custom Folder</button>
        </div>
    </div>
  )
}

export default Sidebar