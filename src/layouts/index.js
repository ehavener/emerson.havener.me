/* eslint-env browser */
/* global document */
import React from 'react';
import Helmet from 'react-helmet';

import '../styles/normalize.css';
import App from '../pages/index';
import '../styles/index.css';

const TemplateWrapper = () => (
  <div>
    <Helmet title="Emerson Havener 👋" />
    <App />
  </div>
);

export default TemplateWrapper;
