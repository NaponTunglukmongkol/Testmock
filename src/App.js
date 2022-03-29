import './App.css';
import { Outlet } from 'react-router-dom';
import UpperNav from './component/UpperNav';
import SideNav from './component/SideNav';

function App() {
  return (
    <div className='background'>
      <UpperNav />
      <SideNav />
      <Outlet />
    </div>
  );
}

export default App;
