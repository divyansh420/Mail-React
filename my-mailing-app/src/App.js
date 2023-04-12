import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mail from './Mail';
// import EmailList from './EmailList';
import Inbox from './Inbox';
import Starred from './Starred';
import Deleted from './Deleted';
import Spam from './Spam';
import EmailList from './EmailList';

function App() {
  return (
      <Router>
        <div className="App">
        <Header />
        <Sidebar />
          <Routes>
            <Route exact path='/' element={<EmailList />} />
            <Route exact path='/mail' element={<Mail />} />
            <Route exact path='/inbox' element={<Inbox />} />
            <Route exact path='/starred' element={<Starred />} />
            <Route exact path='/deleted' element={<Deleted />} />
            <Route exact path='/spam' element={<Spam />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
