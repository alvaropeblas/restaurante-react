import React from 'react';
import './App.css';
import Body from './components/Body/Body';
import NavBarLogged from './components/NavBar/Logged/NavBarLogged';
import NavBar from './components/NavBar/NavBar';
import UserProvider from './components/context/userContext';

function App() {
  return (
    <UserProvider>
      <div className='flex flex-col min-h-screen bg-EXTRA_COLOR'>
        <Body className='transition-opacity duration-500 ease-in-out' />
        <NavBar />
      </div>
    </UserProvider>
  );
}

export default App;
