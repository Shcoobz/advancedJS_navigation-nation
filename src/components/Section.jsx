import PropTypes from 'prop-types';

function Section({ id, children }) {
  return <section id={id}>{children}</section>;
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
