import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  HomePage,
  CoursesPage,
  AboutUsPage,
  Achievements,
  GalleryPage,
} from "./Index";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
    </Router>
  );
}

export default App;
