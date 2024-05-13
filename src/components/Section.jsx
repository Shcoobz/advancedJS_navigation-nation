import PropTypes from 'prop-types';

/**
 * Renders a section element with a specified ID and content.
 * Useful for separating different content areas within the application.
 * @param {object} props - Component properties.
 * @param {string} props.id - ID for the section, important for navigation and styling.
 * @param {ReactNode} props.children - Content to be displayed within the section.
 */
function Section({ id, children }) {
  return <section id={id}>{children}</section>;
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
