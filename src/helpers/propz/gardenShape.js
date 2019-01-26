import PropTypes from 'prop-types';

const gardenShape = PropTypes.shape({
  uid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});

export default gardenShape;
