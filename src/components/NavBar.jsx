import PropTypes from 'prop-types';

/**
 * Navigation component that handles the display of different navigation items based on the active state.
 * Animates the navigation overlay in and out based on user interactions.
 * @param {object} props - Component properties.
 * @param {boolean} props.isActive - Boolean indicating if the navigation is active, used to determine animation styles.
 * @param {Function} props.toggleNav - Function to toggle the navigation state, used when a nav item is clicked.
 */
function Navbar({ isActive, toggleNav }) {
  /**
   * Determines the animation class for the navigation items based on the active state.
   * @param {string} direction1 - Initial direction of the animation when inactive.
   * @param {string} direction2 - Direction of the animation when active.
   * @returns {string} - The appropriate animation class name.
   */
  const navAnimation = (direction1, direction2) => {
    return isActive ? `slide-${direction2}-` : `slide-${direction1}-`;
  };

  /**
   * List of navigation items.
   * @const {Array<object>} navItems - Array containing navigation items details such as ID, text, and link.
   */
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
