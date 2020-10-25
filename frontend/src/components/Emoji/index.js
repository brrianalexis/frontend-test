import PropTypes from 'prop-types';

export const Emoji = ({ children, name }) => {
  return (
    <span role='img' aria-label={`${name} emoji`}>
      {children}
    </span>
  );
};

Emoji.propTypes = {
  children: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
