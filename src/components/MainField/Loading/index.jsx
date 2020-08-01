import React from 'react';
import { css } from '@emotion/core';
import HashLoader from 'react-spinners/HashLoader';

const base = css`
  z-index: 1000;
`;

const style = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
`;

const Loading = () => {
  return (
    <div css={base}>
      <div css={style}>
        <HashLoader loading size={50} color="#0f84fe"/>
      </div>
    </div>
  );
};

export default Loading;