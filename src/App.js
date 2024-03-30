import './App.css';
import HostelDashboard from './pages/HostelDashboard';
import SurplusForm from './pages/SurplusForm';
import Launching from './pages/Launching';
import VolunteerDashboard from './pages/VolunteerDashboard';

function App() {
  return (
   <>
    <Launching/>
    <HostelDashboard/>
    <SurplusForm/>
    <VolunteerDashboard/>
   </>
  );
}

export default App;
