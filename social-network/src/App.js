import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
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
            render={() => <Profile />} />
          <Route path='/dialogs'
            render={() => <Dialogs
              state={props.state.dialogsPage} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
