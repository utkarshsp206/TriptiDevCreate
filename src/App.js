import './App.css';
import HostelDashboard from './pages/HostelDashboard';
import SurplusForm from './pages/SurplusForm';
import Launching from './pages/Launching';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Signup from './pages/Signup';
import Login from './pages/Login';
import VolDash from './pages/VolDash';


function App() {
  return (
   <>
    <Routes>
      <Route path='/' Component={Launching}/>
      <Route path='/signup' Component={Signup}/>
      <Route path='/login' Component={Login}/>
      <Route path='/hostel' Component={HostelDashboard}/>
      <Route path='/volunteer' Component={VolDash}/>
      <Route path='/surplus' Component={SurplusForm}/>
    </Routes>
    
   </>
  );
}
export default App;