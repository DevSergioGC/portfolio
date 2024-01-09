import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import ProjectSection from "../sections/ProjectSection";
import EmailSection from "../sections/EmailSection";
import Footer from "../sections/Footer";
import TranslationsProvider from "../components/TranslationsProvider";
import initTranslations from "../i18n";


const i18nNamespaces = ["portfolio"];

export default async function Home({ params: { locale }  }) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
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
    </TranslationsProvider>
  );
}
