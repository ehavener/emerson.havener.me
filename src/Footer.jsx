import React from 'react';
import OnVisible, {setDefaultProps,} from 'react-on-visible';
import './styles/Footer.css';

setDefaultProps({
  bounce: true,
  visibleClassName: 'visible',
  percent: 5,
});

const Footer = () => (
  <div className="footer">
    <OnVisible percent={30} className="nImage">
      <p>© 2018 Emerson Havener</p>
    </OnVisible>
  </div>
);

/**/
export default Footer;
