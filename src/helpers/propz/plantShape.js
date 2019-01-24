import PropTypes from 'prop-types';

const propShape = PropTypes.shape({
  image: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
  sun: PropTypes.string,
  color: PropTypes.string,
  description: PropTypes.string,
});

export default propShape;
