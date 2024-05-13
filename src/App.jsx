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
      <Navbar />
      <Section
        id='home'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581453904507-626ddb717f14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80')",
        }}>
        <a href='https://shcoobz.github.io/' target='_blank'>
          Project Portfolio
        </a>
      </Section>
      <Section id='about' color='var(--navColor2)'>
        Learn More About Me
      </Section>
      <Section id='skills' color='var(--navColor3)'>
        These Are My Strengths
      </Section>
      <Section id='projects' color='var(--navColor4)'>
        These Are My Results
      </Section>
      <Section id='contact' color='var(--navColor5)'>
        Available Anytime
      </Section>
    </div>
  );
}

export default App;
