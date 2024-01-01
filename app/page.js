"use client";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProjectSection from "./sections/ProjectSection";
import EmailSection from "./sections/EmailSection";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col dark:bg-dark dark:text-white bg-light text-black`}
    >
      <div className="container mt-24 mx-auto px-12 py-4 ">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
