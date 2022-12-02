import { Route, Routes } from 'react-router';
import './App.css';
import { Hompage } from './components/pages/Hompage';
import { SignUp } from './components/pages/SignUp';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Hompage/>} />
        <Route path='/signin' element={<SignUp/>} />
      </Routes>
    </div>
  );
}

export default App;
