import './App.css';
import Header from './components/Header/Header';
import Messeges from './components/Messeges/Messeges';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
      <Messeges />
    </div>
  );
}

export default App;
