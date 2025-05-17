import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase.config'; // make sure your Firebase auth is exported from here

import CivicSparkLoader from './Components/Loader';
import MainLayout from './Pages/Home';
import Favourite from './Pages/Favourite';
import IdeaBox from './Pages/IdeaBox';
import Settings from './Pages/Settings';
import Groups from './Pages/Groups';
import SidePanel from './Pages/SidePanel';
import Abiamap from './Pages/Abiamap';
import FeedPanel from './Pages/Feed';
import CivicSparkLandingPage from './Pages/LandingPage';
import Login from './Pages/SignIn';
import SignUp from './Pages/signup';

import { AuthProvider } from './Components/Context';
import ProtectedRoute from './Components/protectedroutes';

function App() {
  const [authChecked, setAuthChecked] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser && currentUser.emailVerified) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setAuthChecked(true);
    });

    return () => unsubscribe();
  }, []);

  if (!authChecked) {
    // You can style this loader to be more fun/engaging
    return <CivicSparkLoader message="Warming up CivicSpark..." />;
  }

  return (
    <AuthProvider>
      <Router basename="/CivicSpark">
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<CivicSparkLandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/landingpage" element={<CivicSparkLandingPage />} />

          {/* Protected Routes */}
          <Route path="/home" element={<ProtectedRoute><MainLayout /></ProtectedRoute>} />
          <Route path="/favourite" element={<ProtectedRoute><Favourite /></ProtectedRoute>} />
          <Route path="/ideabox" element={<ProtectedRoute><IdeaBox /></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
          <Route path="/groups" element={<ProtectedRoute><Groups /></ProtectedRoute>} />
          <Route path="/sidebar" element={<ProtectedRoute><SidePanel /></ProtectedRoute>} />
          <Route path="/abiamap" element={<ProtectedRoute><Abiamap /></ProtectedRoute>} />
          <Route path="/feed" element={<ProtectedRoute><FeedPanel /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
