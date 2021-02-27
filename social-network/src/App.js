import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Header from './components/Header/Header';
import MessagesBar from './components/MessagesBar/MessagesBar';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <MessagesBar />
        <div className='app-wrapper-content'>
          <Route path='/profile'
            render={() => <ProfileContainer />} />
          <Route path='/dialogs'
            render={() => <DialogsContainer />} />
          <Route path='/users'
            render={() => <UsersContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
