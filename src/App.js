import "./styles/Home.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/Home/Home";
import Build from "./components/BuildPage/BuildPage/BuildPage";
import Projects from "./components/Projects/Projects";
import Profile from "./components/Profile/Profile";
import BuildForm from "./components/BuildPage/BuildForm/BuildForm";
import ProjectPage from "./components/Projects/ProjectPage";

import CertificatePage from "./components/Projects/CertificatePage";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/Build" element={<Build />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/build/apply" element={<BuildForm />} />
          <Route path="/projects/:builderUrl" element={<ProjectPage />} />
          <Route
            path="/projects/:builderUrl/certificates/:ca"
            element={<CertificatePage />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
