import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import HrmsCaseStudy from "./pages/HrmsCaseStudy";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-ink font-body">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/hrms-pro" element={<HrmsCaseStudy />} />
      </Routes>
    </div>
  );
}
