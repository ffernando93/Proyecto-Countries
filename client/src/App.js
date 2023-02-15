import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './views/home/Home';
import Landing from './views/landing/Landing';
import Detail from "./components/detail/Detail"
import Form from "./components/form/Form"

function App() {
  return (
   
    <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/' element={<Landing/>}/>
    <Route path='/country/:id' element={<Detail/>}/>
    <Route path='/activity' element={<Form/>}/>
  </Routes>
 
  );
}

export default App;
