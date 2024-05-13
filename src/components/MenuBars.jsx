function MenuBars({ toggleNav, isActive }) {
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
