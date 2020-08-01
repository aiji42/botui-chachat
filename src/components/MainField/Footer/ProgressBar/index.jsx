import React, { useContext } from 'react';
import { Line } from 'rc-progress';
import { ChatBotContext } from '../../../ChatBot';

const ProgressBar = () => {
  const { percentage } = useContext(ChatBotContext);

  return (
    <Line percent={percentage}
      strokeWidth="3" strokeColor="#16e4ac"
      trailWidth="3"
    />
  );
};

export default ProgressBar;