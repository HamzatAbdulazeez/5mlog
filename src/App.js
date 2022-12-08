import { Route, Routes } from 'react-router';
import './App.css';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { FAQs } from './components/pages/FAQs';
import { Hompage } from './components/pages/Hompage';
import { Services } from './components/pages/Services';
import { SignUp } from './components/pages/SignUp';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Hompage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/faqs' element={<FAQs/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/signin' element={<SignUp/>} />
      </Routes>
    </div>
  );
}

export default App;
