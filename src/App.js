import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Feed from './Components/feed/feed';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import { selectUser } from './features/userSlice';

function App() {

  // const user = useSelector(selectUser)
  return (
    <div className="app">
      <Header />
      <div className="app__body container mt-5">
        <Sidebar />
        <Feed/>
      </div>
      {/* {!user ? <Login /> :
        <div>
          <Header />
          <div className="app__body container mt-5">
            <Sidebar />
            <Feed />
          </div>
        </div>
      } */}
    </div>
  );
}

export default App;
