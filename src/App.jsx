import { useState } from 'react';

import MenuBars from './components/MenuBars';
import Navbar from './components/NavBar';
import Section from './components/Section';

function App() {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <MenuBars toggleNav={toggleNav} isActive={isActive} />
      <Navbar isActive={isActive} />
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
