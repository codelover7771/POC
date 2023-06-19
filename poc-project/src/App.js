
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import DataComponent from './components/DataComponent';
import mockdata from "./mockdata.json";
import { useEffect } from 'react';
import {setIndex, setMainMenu } from './redux/actions';
import { useDispatch } from 'react-redux';


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    setMainMenu(mockdata.mainmenu);
    dispatch( setIndex(mockdata.current_menu))
}, []);
  return (
   
      <div className="border border-indigo-600">
        <Navbar data = {mockdata}/>
          <Routes>
          <Route path="/" element={<DataComponent/>} />
          <Route path="/prototype" element={<DataComponent/>} />
          <Route path="/testing" element={<DataComponent/>} />
          <Route path="/feedback" element={<DataComponent/>} />
          </Routes>
      </div>
     
  );
};

export default App;