import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Aiglasses from "./pages/Aiglasses";
import RayBenMeta from "./pages/RayBenMeta";
import OkelayMeta from "./pages/OkelayMeta";
import Metaquest from "./pages/Metaquest";
import Metaquest2s from "./pages/Metaquest2s";
import Metaquest3s from "./pages/Metaquest3s";
import Support from "./pages/Support";
import Login from "./pages/Login";

export default function App(){
  return(
    <Router>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />}/>
        
        <Route path="/Ai-glasses/1" element={<Aiglasses />} />
        <Route path="/Ai-glasses/2" element={<RayBenMeta />} />
        <Route path="/Ai-glasses/3" element={<OkelayMeta/>} />
<Route path="/Metaquest" element={<Metaquest/>} />
<Route path="/Metaquest/2" element={<Metaquest2s/>} />
<Route path="/Metaquest/3" element={<Metaquest3s/>} />
<Route path="/support" element={<Support/>} />
<Route path="/login" element={<Login/>} />

      </Routes>

      <Footer/>
    </Router>
  );
}