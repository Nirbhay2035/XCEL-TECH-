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
import { BrowserRouter as Router, Routes, Route , useLocation } from 'react-router-dom';
import BestSelling from './Components/BestSelling';
import Cards from './Components/RecentBlogs';
import XcelBroadBandPlans from './Components/XcelBroadBandPlans';

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
  
    return (
      <>
        <Nav />
        
        <div >
          {/* This wrapper ensures that the content won't overlap the footer */}
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route exact path="/login" element={<Loginpage />} />
            
          </Routes>
        </div>
            
            {!isLoginPage && <BestSelling/>}
            {!isLoginPage && <Cards/>}
            {/* {!isLoginPage && <XcelBroadBandPlans/>} */}

        {!isLoginPage && <Footer />}
      </>
    );
  }
  
  export default App;