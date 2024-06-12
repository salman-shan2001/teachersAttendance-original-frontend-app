import logo from './logo.svg';
import './App.css';
import AddTeacher from './components/AddTeacher';
import Viewteacher from './components/Viewteacher';
import SearchTeacher from './components/SearchTeacher';

function App() {
  return (
    <div >
      <AddTeacher/>
      <Viewteacher/>
      <SearchTeacher/>
    </div>
  );
}

export default App;
