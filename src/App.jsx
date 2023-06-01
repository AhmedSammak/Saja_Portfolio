import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./nav";
import ProjectsPage from "./projects/projectsPage";
import UxProjects from "./projects/uxProjects";
import UiProjects from "./projects/uiProjects";
import ArtProjects from "./projects/artProjects";
import BrandingProjects from "./projects/brandingProjects";
import Consulting from "./projects/consulting";
import Illustration from "./projects/illustration";
import ProductDesignSketches from "./projects/productDesignSketches";
import EmptyProjectPage from "./projects/emptyProjectPage";
import SingleProjectPage from "./projects/singleProjectPage";
function App() {
  const { pathName } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathName]);
  return (
    <>
      <Navbar />
      <Routes>
        {window.scrollTo({ top: 0, behavior: "smooth" })}
        <Route path="/Projectspage" element={<ProjectsPage />} />
        <Route path="/UxProjects" element={<UxProjects />} />
        <Route path="/UiProjects" element={<UiProjects />} />
        <Route path="/BrandingProjects" element={<BrandingProjects />} />
        <Route path="/ArtProjects" element={<ArtProjects />} />
        <Route path="/Consulting" element={<Consulting />} />
        <Route path="/Illustration" element={<Illustration />} />
        <Route
          path="/ProductDesignSketches"
          element={<ProductDesignSketches />}
        />
        <Route path="/EmptyPage" element={<EmptyProjectPage />} />
        <Route path="/ProjectPage" element={<SingleProjectPage />} />
      </Routes>
    </>
  );
}

export default App;
