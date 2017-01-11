import React from 'react';

import styling from '../styling/main.scss';

const Footer = () =>
(
  <div className={styling.footer}>
    &copy; {new Date().getFullYear()} Vensa Health
  </div>
);

export default Footer;
