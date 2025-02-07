import './nav.css';
import './banner.css';
import './App.css';
import './loginpage.css';
import './BestSelling.css';
// import './XcelBroadBandPlans.css';
import Nav from './Components/Nav';
import Banner from './Components/Banner';
import Loginpage from './Components/Loginpage';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import BestSelling from './Components/BestSelling';
import Cards from './Components/RecentBlogs';
import { useEffect, useState } from 'react';
import Register from './Components/Register';
import { AuthProvider } from './endpoints/useAuth';
// import axios from 'axios';
// import XcelBroadBandPlans from './Components/XcelBroadBandPlans';
function App() {
  return (
    <Router>
      <Main /> {/* Wrap your main component inside Router */}
    </Router>
  );
}

function Main() {
  const location = useLocation(); // Get current route location

  // Determine if we are on the login page
  const isLoginPage = location.pathname === '/login';
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <>

      <Nav />

      <div >
        <AuthProvider>         {/* This wrapper ensures that the content won't overlap the footer */}
          <Routes>
            <Route path="/Banner" element={user ? <Banner /> : <navigate to="/login" />} />
            <Route path='/register' element={<Register />}></Route>
            <Route exact path="/login" element={<Loginpage />} />

          </Routes>
        </AuthProvider>

      </div>

      {!isLoginPage && <BestSelling />}
      {!isLoginPage && <Cards />}
      {/* {!isLoginPage && <XcelBroadBandPlans/>} */}

      {!isLoginPage && <Footer />}
      {/* <p>message{data}</p> */}
    </>
  );
}

export default App;