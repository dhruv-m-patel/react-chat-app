import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

export default function DefaultHelmet({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}

DefaultHelmet.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

DefaultHelmet.defaultProps = {
  title: 'React Chat App',
  description: 'A chat app built with React and Pisher\'s ChatKit',
};
