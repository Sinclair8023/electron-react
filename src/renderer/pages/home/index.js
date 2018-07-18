import React from 'react';
import { connect } from 'dva';

const home = () => (
  <h1>welcome electron-react</h1>
);

export default connect()(home);
