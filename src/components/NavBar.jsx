import PropTypes from 'prop-types';

function Navbar({ isActive, toggleNav }) {
  const navAnimation = (direction1, direction2) => {
    return isActive ? `slide-${direction2}-` : `slide-${direction1}-`;
  };

  const navItems = [
    { id: 'nav-1', text: 'Home', link: '#home' },
    { id: 'nav-2', text: 'About', link: '#about' },
    { id: 'nav-3', text: 'Skills', link: '#skills' },
    { id: 'nav-4', text: 'Projects', link: '#projects' },
    { id: 'nav-5', text: 'Contact', link: '#contact' },
  ];

  return (
    <div
      className={`overlay${isActive ? ' overlay-slide-right' : ' overlay-slide-left'}`}
      id='overlay'>
      <nav>
        <ul>
          {navItems.map((item, index) => (
            <li
              key={item.id}
              id={item.id}
              className={`${navAnimation('out', 'in')}${index + 1}`}>
              <a href={item.link} onClick={toggleNav}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  isActive: PropTypes.bool.isRequired,
  toggleNav: PropTypes.func.isRequired,
};

export default Navbar;
