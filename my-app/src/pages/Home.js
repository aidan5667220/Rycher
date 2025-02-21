import Header from '../components/Header';
import TypingText from '../components/TypingText';
import FadeInSection from '../components/FadeInSection';
import AccordionBoxes from '../components/AccordionBoxes';
import OurProjects from '../components/OurProjects';
import WordCarousel from '../components/WordCarousel';
import BottomSection from '../components/BottomSection';
import Footer from '../components/Footer';
import './Home.css';

function Home() {
  const sentences = [
    "700 Million People bring home less than $2.15 Per Day",
    "Nearly 1 in 10 people around the world go to bed hungry each night ",
    "Rich countries continue to ignore the core issues",
    "Hunger related deaths are responsible for 45% of childen deaths worldwide",
    "More people have access to a mobile phone than a toliet"
  ];

  return (
    <div className="App">
      <Header />
      <div className="typing-container">
        <TypingText 
          text="1 Billion people are in poverty. What are you doing to help?" 
          speed={100} 
        />
      </div>
      <FadeInSection>
        <div className="big-text">
          <h2>Let's stop putting bandaids on a bullet wound and fix the problem at its core.</h2>
        </div>
        </FadeInSection>
      <FadeInSection>
        <AccordionBoxes />
      </FadeInSection>
        {/* Separator: ensures OurProjects is a separate section */}
        <div className="section-separator"></div>
      <FadeInSection>
        <OurProjects />
      </FadeInSection>

      <WordCarousel sentences={sentences} interval={5000} />
      <BottomSection />
      <Footer />
    </div>
  );
}

export default Home;

