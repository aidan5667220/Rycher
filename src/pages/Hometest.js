import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hometest.css';
import TypingText from '../components/TypingText';
import WordCarousel from '../components/WordCarousel';
import TypeformEmbed from '../components/TypeformEmbed';

// Define your sentences array at the top of the file
const sentences = [
  "700 Million People bring home less than $2.15 Per Day",
  "Nearly 1 in 10 people around the world go to bed hungry each night",
  "Rich countries continue to ignore the core issues",
  "Hunger related deaths are responsible for 45% of childen deaths worldwide",
  "More people have access to a mobile phone than a toilet"
];

const Hometest = () => {
  // References for the tab container, slider indicator, and individual tabs
  const tabContainerRef = useRef(null);
  const tabSliderRef = useRef(null);
  const tabRefs = useRef([]);
  const tabContainerHeight = 70;
  const currentIdRef = useRef(null);

  // Define the tab links (each tab points to a section by ID)
  const tabs = [
    { href: '#tab-es6', label: 'The Idea' },
    { href: '#tab-flexbox', label: 'The Why' },
    { href: '#tab-react', label: 'Apps' },
    { href: '#tab-angular', label: 'Creators' },
    { href: '#tab-other', label: 'Beta' },
  ];

  // Set up scroll and resize event listeners on mount
  useEffect(() => {
    const onScroll = () => {
      checkTabContainerPosition();
      findCurrentTabSelector();
    };

    const onResize = () => {
      if (currentIdRef.current) {
        setSliderCss();
      }
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // Load the Typeform script dynamically
  useEffect(() => {
    const script = document.createElement('script');
    // Use explicit protocol for reliability
    script.src = "https://embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup: remove the script if needed on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Smooth-scroll back to the top when the "Back to Top" container is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // When a tab is clicked, scroll to its corresponding section
  const onTabClick = (event, href) => {
    event.preventDefault();
    const targetSection = document.querySelector(href);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - tabContainerHeight + 1,
        behavior: 'smooth',
      });
    }
  };

  // Checks whether the tab container should switch to a fixed-top position
  const checkTabContainerPosition = () => {
    const etHeroTabs = document.querySelector('.et-hero-tabs');
    if (!etHeroTabs || !tabContainerRef.current) return;
    const offset =
      etHeroTabs.getBoundingClientRect().top + etHeroTabs.offsetHeight - tabContainerHeight;
    if (window.pageYOffset > offset) {
      tabContainerRef.current.classList.add('et-hero-tabs-container--top');
    } else {
      tabContainerRef.current.classList.remove('et-hero-tabs-container--top');
    }
  };

  // Finds which tab is currently active based on the scroll position
  const findCurrentTabSelector = () => {
    let newCurrentId = null;
    let newCurrentTab = null;
    tabRefs.current.forEach((tab) => {
      const id = tab.getAttribute('href');
      if (!id) return;
      const section = document.querySelector(id);
      if (!section) return;
      const offsetTop = section.offsetTop - tabContainerHeight;
      const offsetBottom = section.offsetTop + section.offsetHeight - tabContainerHeight;
      if (window.pageYOffset > offsetTop && window.pageYOffset < offsetBottom) {
        newCurrentId = id;
        newCurrentTab = tab;
      }
    });
    if (currentIdRef.current !== newCurrentId || currentIdRef.current === null) {
      currentIdRef.current = newCurrentId;
      setSliderCss(newCurrentTab);
    }
  };

  // Updates the slider indicator (blue bar) to align with the active tab
  const setSliderCss = (currentTabElement) => {
    if (!tabSliderRef.current || !currentTabElement) return;
    const width = currentTabElement.offsetWidth;
    const left = currentTabElement.getBoundingClientRect().left;
    tabSliderRef.current.style.width = `${width}px`;
    tabSliderRef.current.style.left = `${left}px`;
  };

  return (
    <>
      {/* Hero section with the sticky slider nav */}
      <section className="et-hero-tabs">
        <h1>Rycher</h1>
        <h3>Lets stop putting a bandaid on a bullet wound</h3>
        <TypingText 
          text="Inovation, Collaboration, Patience and Integrity" 
          speed={100} 
        />
        <div className="et-hero-tabs-container" ref={tabContainerRef}>
          {tabs.map((tab, index) => (
            <a
              key={index}
              className="et-hero-tab"
              href={tab.href}
              onClick={(e) => onTabClick(e, tab.href)}
              ref={(el) => (tabRefs.current[index] = el)}
            >
              {tab.label}
            </a>
          ))}
          <span className="et-hero-tab-slider" ref={tabSliderRef}></span>
        </div>
      </section>

      {/* Main content sections */}
      <main className="et-main">
        <section className="et-slide" id="tab-es6">
          <div className="slide-background slide-bg-es6">
            <h1>The Idea</h1>
            <h3>How we are funding the un-fundable</h3>
            <div className="learn-more">
              <Link to="/theidea" className="learn-more-button">
                The Idea
              </Link>
            </div>
          </div>
        </section>
        <section className="et-slide" id="tab-flexbox">
          <div className="slide-background slide-bg-flexbox">
            <h1>The Why</h1>
            <h3>Why are we doing this?</h3>
            <div className="learn-more">
              <Link to="/thewhy" className="learn-more-button">
                The Why
              </Link>
              <WordCarousel sentences={sentences} /> 
            </div>
          </div>
        </section>
        <section className="et-slide" id="tab-react">
          <div className="slide-background slide-bg-react">
            <h1>Applications that are in the Works</h1>
            <h3>
              We are currently working on creating applications that help bring together collaborative team building 
            </h3>
            <Link to="/applications" className="learn-more-button">
              The Apps
            </Link>
          </div>
        </section>
        <section className="et-slide" id="tab-angular">
          <div className="slide-background slide-bg-angular">
            <h1>The Creators</h1>
            <h3>"Live in someone else's shoes for a day"</h3>
            <div className="learn-more">
              <Link to="/thecreator" className="learn-more-button">
                The Creators
              </Link>
            </div>
          </div>
        </section>
        <section className="et-slide" id="tab-other">
          <div className="slide-background slide-bg-other">
            <h1>This Website is still in Beta</h1>
            <h3>
              Please send in your email below with any questions
            </h3>
            <TypeformEmbed />
                </div>
        </section>
      </main>
    </>
  );
};

export default Hometest;
