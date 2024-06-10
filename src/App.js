import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './Add';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path='/Add' element={<Add/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
