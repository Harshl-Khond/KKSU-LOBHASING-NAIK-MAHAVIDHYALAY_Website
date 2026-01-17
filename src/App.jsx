import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Administration from "./pages/Administration";
import Contact from "./pages/Contact";
import StudentLife from "./pages/StudentLife";


function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academic" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/administration" element={<Administration />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/student-life" element={<StudentLife />} />
      
      </Route>
    </Routes>
  );
}

export default App;
