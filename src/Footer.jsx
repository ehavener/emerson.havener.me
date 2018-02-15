import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

const Footer = ({ visible }) => (
  <div className="footer">
    <div className={visible ? 'nImage reached' : 'nImage'}><p>© 2018 Emerson Havener</p></div>
  </div>
);
Footer.propTypes = {
  visible: PropTypes.bool.isRequired,
};
/**/
export default Footer;
