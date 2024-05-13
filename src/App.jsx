import { useState } from 'react';

import MenuBars from './components/MenuBars';
import Navbar from './components/NavBar';
import Section from './components/Section';

/**
 * Main application component that manages navigation state and renders different sections of the website.
 * Utilizes React hooks for state management.
 */
function App() {
  /**
   * Represents whether the navigation is active or not.
   * @const {boolean} isActive - Boolean state to track if the navigation is currently active.
   */
  const [isActive, setIsActive] = useState(false);

  /**
   * Toggles the navigation active state.
   * @function toggleNav
   * @returns {void}
   */
  function toggleNav() {
    setIsActive(!isActive);
  }

  return (
    <div>
      <MenuBars toggleNav={toggleNav} isActive={isActive} />
      <Navbar isActive={isActive} toggleNav={toggleNav} />
      <Section id='home'>
        <a href='https://shcoobz.github.io/' target='_blank'>
          Project Portfolio
        </a>
      </Section>
      <Section id='about'>Learn More About Me</Section>
      <Section id='skills'>These Are My Strengths</Section>
      <Section id='projects'>These Are My Results</Section>
      <Section id='contact'>Available Anytime</Section>
    </div>
  );
}

export default App;
