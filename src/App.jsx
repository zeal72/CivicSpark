import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CivicSparkLoader from './Components/Loader';
import MainLayout from './Pages/Home';
import Favourite from './Pages/Favourite';
import IdeaBox from './Pages/IdeaBox';
import Settings from './Pages/Settings';
import Groups from './Pages/Groups';
import SidePanel from './Pages/Sidebar';
import Abiamap from './Pages/Abiamap';
import FeedPanel from './Pages/Feed';
import CivicSparkChatbot from './Pages/Chatbot';
import LandingPage from './Pages/LandingPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <CivicSparkLoader />
  ) : (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/home" element={<MainLayout />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/ideabox" element={<IdeaBox />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/sidebar" element={<SidePanel />} />
        <Route path="/abiamap" element={<Abiamap />} />
        <Route path="/feed" element={<FeedPanel />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/chatbot" element={<CivicSparkChatbot />} />
      </Routes>
    </Router>
  );
}

export default App;