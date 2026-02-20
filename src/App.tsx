import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ActivityScreen from './screens/ActivityScreen';
import EvidenceScreen from './screens/EvidenceScreen';
import SummaryScreen from './screens/SummaryScreen';
import DashboardScreen from './screens/DashboardScreen';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/activity" element={<ActivityScreen />} />
        <Route path="/evidence" element={<EvidenceScreen />} />
        <Route path="/summary" element={<SummaryScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
        
        {/* Fallback routes for bottom nav */}
        <Route path="/reports" element={<DashboardScreen />} />
        <Route path="/plans" element={<HomeScreen />} />
        <Route path="/settings" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}
