import Header from './components/Header';
import Hero from './components/Hero';
/* import NewOrbitSection from './components/NewOrbitSection';
import ODECUnion from './components/ODECUnion';
import UrgencyNumbers from './components/UrgencyNumbers';
import JoinSection from './components/JoinSection';
import AboutSection from './components/AboutSection';
import FrameworkSection from './components/FrameworkSection'; */
import ContactSection from './components/ContactSection'; 
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        {/* <AboutSection />
        <NewOrbitSection />
        {/* <GovernanceGap /> */}
        {/* <ODECUnion />
        <UrgencyNumbers />
        <FrameworkSection />
        <JoinSection /> */}
        {/* <ContactSection />  */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
