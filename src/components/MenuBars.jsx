import PropTypes from 'prop-types';

/**
 * Component for displaying and controlling a hamburger menu for navigation.
 * Toggles the visibility of the navigation based on user interaction.
 * @param {object} props - Component properties.
 * @param {Function} props.toggleNav - Function to call when the menu bars are clicked, used to toggle navigation state.
 * @param {boolean} props.isActive - Current state of navigation, determines the visual toggle state of the menu bars.
 */
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

MenuBars.propTypes = {
  toggleNav: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default MenuBars;
