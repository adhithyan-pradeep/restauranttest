import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import PageTransition from './components/PageTransition';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import PartyOrders from './pages/PartyOrders';
import Mess from './pages/Mess';
import Loyalty from './pages/Loyalty';
import Reviews from './pages/Reviews';
import Vote from './pages/Vote';
import Contact from './pages/Contact';
import Login from './pages/Login';

function App() {
  const location = useLocation();

  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              {/* Public Routes */}
              <Route path="/restaurant" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/menu" element={<PageTransition><Menu /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              <Route path="/login" element={<PageTransition><Login /></PageTransition>} />

              {/* Protected Routes */}
              <Route path="/party" element={<ProtectedRoute><PageTransition><PartyOrders /></PageTransition></ProtectedRoute>} />
              <Route path="/mess" element={<ProtectedRoute><PageTransition><Mess /></PageTransition></ProtectedRoute>} />
              <Route path="/loyalty" element={<ProtectedRoute><PageTransition><Loyalty /></PageTransition></ProtectedRoute>} />
              <Route path="/reviews" element={<ProtectedRoute><PageTransition><Reviews /></PageTransition></ProtectedRoute>} />
              <Route path="/vote" element={<ProtectedRoute><PageTransition><Vote /></PageTransition></ProtectedRoute>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
