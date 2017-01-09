import React from 'react';

import styling from '../styling/main.scss';

import BackArrow from '../svgs/back-arrow';
import VensaLogo from '../svgs/vensa-logo';

// eslint-disable-next-line no-alert
const showClick = msg => alert(msg);

export default () =>
(
  <div className={styling.header}>
    <BackArrow className={styling['back-arrow']} onClick={(e) => { e.preventDefault(); showClick('going back...'); }} />
    <VensaLogo className={styling['vensa-logo']} />
    <a href="/help" onClick={(e) => { e.preventDefault(); showClick('getting help...'); }}>HELP</a>
  </div>
);
