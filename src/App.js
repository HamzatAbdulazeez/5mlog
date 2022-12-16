import { Route, Routes } from 'react-router';
import './App.css';
import ScrollToTop from './components/assets/ScrollTop';
import ClientDashboard from './components/dashboard';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { FAQs } from './components/pages/FAQs';
import { AdminLogin } from './components/pages/forms/AdminLogin';
import { Forget } from './components/pages/forms/Forget';
import { Login } from './components/pages/forms/Login';
import { Register } from './components/pages/forms/Register';
import { Hompage } from './components/pages/Hompage';
import { Services } from './components/pages/Services';

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
        <Route path='/login' element={<Login/>} />
        <Route path='/admin' element={<AdminLogin/>} />
        <Route path='/signup' element={<Register/>} />
        <Route path='/forget' element={<Forget/>} />
        <Route path='/dashboard*' element={<ClientDashboard/>} />
      </Routes>
    </div>
  );
}

export default App;
