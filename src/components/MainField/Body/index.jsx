import React, { useEffect, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { PostRobotContext } from 'react-hook-post-robot';
import Loading from '../Loading';
import { ChatBotContext } from '../../ChatBot';

const style = css`
  width: 100%;
  background: white;
`;

const Body = ({ css: cssStyle, ...props }) => {
  const { init } = useContext(PostRobotContext);
  const { loading } = useContext(ChatBotContext);
  const ref = useRef(null);
  useEffect(() => { ref.current && init(ref.current.contentWindow); }, [ref]);

  return (
    <div css={[style, cssStyle]} {...props}>
      {loading && <Loading />}
      <iframe ref={ref} src={process.env.BOTUI_CHILD_ENDPOINT} height="100%" width="100%" frameBorder="no" />
    </div>
  );
};

Body.propTypes = {
  css: PropTypes.object,
};

export default Body;