import React from 'react';
import { css } from '@emotion/core';
import logo from './logo.png';

const style = css`
  box-sizing: content-box;
  max-height: 57px;
  margin-right: auto;
  margin-left: auto;
`;

const Logo = (props) => <img css={style} src={logo} {...props} />;
export default Logo;