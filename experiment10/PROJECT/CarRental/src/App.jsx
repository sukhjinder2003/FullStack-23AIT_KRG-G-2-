import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import LandingPage from './Pages/LandingPage';
import AboutUs from './Pages/AboutUs';
import BookNow from './Pages/BookNow';
import Booking from './Pages/Booking';
import AdminLanding from './Pages/AdminLanding';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AdminNavbar from './Components/ANavnbar';
import AdminBookings from './Pages/AdminBookings';
import MakeAvailable from './Pages/MakeAvailable';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Auth */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* User */}
        <Route
          path="/user"
          element={
            <>
              <Navbar />
              <LandingPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/user/about"
          element={
            <>
              <Navbar />
              <AboutUs />
              <Footer />
            </>
          }
        />
        <Route
          path="/user/booknow"
          element={
            <>
              <Navbar />
              <BookNow />
              <Footer />
            </>
          }
        />
        <Route
          path="/user/booking/:id"
          element={
            <>
              <Navbar />
              <Booking />
              <Footer />
            </>
          }
        />

        {/* Admin */}
        <Route
          path="/admin"
          element={
            <>
              <AdminNavbar />
              <AdminLanding />
            </>
          }
        />
        <Route
          path="/admin/bookings"
          element={
            <>
              <AdminNavbar />
              <AdminBookings />
            </>
          }
        />
        <Route
          path="/admin/makeavailable"
          element={
            <>
              <AdminNavbar />
              <MakeAvailable />
            </>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<h1 className="text-center text-white mt-20">404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
