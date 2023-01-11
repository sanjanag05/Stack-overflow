import { BrowserRouter, BrowserRouter as Router} from 'react-router-dom'
import { useEffect } from 'react';
import AllRoutes from './AllRoutes';
import './App.css';
import { useDispatch } from 'react-redux';
import Navbar from './component/Navbar/Navbar';
import { fetchAllQuestions } from './actions/question';
import { fetchAllUsers } from './actions/users';


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
   
  }, [dispatch])
  
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar />
    <AllRoutes/>
    </div>
    </BrowserRouter>
  );
} 

export default App;
