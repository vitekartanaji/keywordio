import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import CreateAdd from "./components/createAdd/CreateAdd";
import Dashboard from "./components/dashboard/Dashboard";
import Click1 from "./components/clicks/Click1";
import TextAdd from "./components/textAdd/TextAdd";
import MediaAdd from "./components/mediaAdd/MediaAdd";

function App() {
  return (
    <div className="bg-gray-50 w-full h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create-ads" element={<CreateAdd />} />
          <Route path="/click1" element={<Click1 />} />
          <Route path="/text-add" element={<TextAdd />} />
          <Route path="/media-add" element={<MediaAdd />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
