
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import VerticalTabs from './components/VericalTabs';

const App = () => {
  const currentRoute = '/paper';
  return (
    <Router>
      <div className="border border-indigo-600">
        <Navbar/>
        <VerticalTabs currentRoute={currentRoute}/>
        {/* <div className="content">
          <HorizontalTable />
          <VerticalTabs />
          <Route path="/paper" component={PaperFormulation} />
          <Route path="/prototype" component={PrototypeBuilding} />
          <Route path="/lab" component={LabTesting} />
          <Route path="/shipment" component={ShipmentFeedback} />
        </div> */}
      </div>
    </Router>
  );
};

export default App;