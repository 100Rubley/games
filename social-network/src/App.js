import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Header from './components/Header/Header';
import MessagesBar from './components/MessagesBar/MessagesBar';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <MessagesBar />
        <div className='app-wrapper-content'>
          <Route path='/profile'
            render={() => <Profile store={props.store} />} />
          <Route path='/dialogs'
            render={() => <DialogsContainer store={props.store} />} />
          <Route path='/users'
            render={() => <UsersContainer store={props.store} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
