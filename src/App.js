import { Route, Routes } from 'react-router';
import './App.css';
import ScrollToTop from './components/assets/ScrollTop';
import Dashboard from './components/dashboard';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { FAQs } from './components/pages/FAQs';
import { AdminLogin } from './components/pages/forms/AdminLogin';
import { Forget } from './components/pages/forms/Forget';
import { Login } from './components/pages/forms/Login';
import { Register } from './components/pages/forms/Register';
import { Hompage } from './components/pages/Hompage';
import { Services } from './components/pages/Services';
import { EmailVeryfy } from './components/pages/EmailVeryfy';
import { ResetPassword } from './components/pages/forms/ResetPassword';
import { Terms } from './components/pages/Terms';
import { Privacy } from './components/pages/Privacy';
import { TrackDetails } from './components/pages/TrackDetails';
import { Protected } from './components/assets/Protected';

function App() {
  return (
    <div className="">
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Hompage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/faqs' element={<FAQs/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/terms' element={<Terms/>} />
        <Route path='/privacy' element={<Privacy/>} />
        <Route path='/tracking' element={<TrackDetails/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/admin' element={<AdminLogin/>} />
        <Route path='/signup' element={<Register />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/forget' element={<Forget/>} />
        <Route path='/dashboard/*' element={<Protected><Dashboard /></Protected>} />
        <Route path="/email-verify" element={<EmailVeryfy />} />
      </Routes>
    </div>
  );
}

export default App;
