import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import { useDarkMode } from "../app/components/DarkModeContext.jsx";

export default function Home() {
  const { darkMode } = useDarkMode();
  return (
    <main className={`flex min-h-screen flex-col ${darkMode ? `dark-mode` : `light-mode`}`}>
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
