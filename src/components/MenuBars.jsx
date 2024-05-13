import { useState } from 'react';

function MenuBars() {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`menu-bars${isActive ? ' change' : ''}`}
      id='menu-bars'
      onClick={toggleNav}>
      <div className='bar1'></div>
      <div className='bar2'></div>
      <div className='bar3'></div>
    </div>
  );
}

export default MenuBars;
