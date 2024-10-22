import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Views/Navbar"; // Make sure NavBar is imported correctly
import Main from "./Views/Main"; // Ensure Main component is imported correctly
import Precooling from "./Views/Precooling"; // Import Precooling component
import TrailerAssignment from "./Views/TrailerAssignment"; // Import TrailerAssignment component
import './App.css'; // Import the CSS file

function App() {
  return (
    <div className="app">
      <NavBar /> {/* NavBar should be outside Routes */}
      <div className="main-content"> {/* Added class for styling */}
        <Routes>
          <Route path="/" element={<Main />} /> {/* Main Component */}
          <Route path="/pre-cooling" element={<Precooling />} /> {/* Precooling Component */}
          <Route path="/trailers" element={<TrailerAssignment />} /> {/* TrailerAssignment Component */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
