import logo from './logo.svg';
import './App.css';
import AddTeacher from './components/AddTeacher';
import Viewteacher from './components/Viewteacher';
import SearchTeacher from './components/SearchTeacher';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    
    <Routes>
<Route    path='/' element={<AddTeacher/>}/>
<Route   path='/SearchTeacher' element={<SearchTeacher/>}/>
<Route   path='/Viewteacher' element={<Viewteacher/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
