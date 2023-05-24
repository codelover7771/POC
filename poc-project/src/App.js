
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import DataComponent from './components/DataComponent';
import data from "./data.json";


const App = () => {
  return (
   
      <div className="border border-indigo-600">
        <Navbar data = {data}/>
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