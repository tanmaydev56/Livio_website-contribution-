import  { useEffect, useRef } from 'react';
import FaqItem from '../components/FaqItem';
import styles from '../styles/FaqSection.module.css';  // Import CSS module
import faqdata from '../components/FaqData.jsx';

function FaqSection() {
  const faqRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const faqSection = faqRef.current;
      if (faqSection) {
        const rect = faqSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isInView) {
          // Trigger animation by adding the 'animate' class to h1
          faqSection.querySelector('h1').classList.add(styles.animate);
        } else {
          // Remove 'animate' class if FAQ section is out of view
          faqSection.querySelector('h1').classList.remove(styles.animate);
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Check immediately in case FAQ section is already in view
    handleScroll();

    // Clean up by removing event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className={styles.faqSection} ref={faqRef}>
      <h1 className={styles.title}>Frequently Asked Questions</h1>
      <div>
        {faqdata.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

export default FaqSection;
