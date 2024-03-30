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


function App() {
  return (
   <>
    <Routes>
      <Route path='/' Component={Launching}/>
      <Route path='/signup' Component={Signup}/>
    </Routes>
    
   </>
  );
}
export default App;