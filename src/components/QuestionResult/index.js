/* eslint-disable react/prop-types */
import React from 'react';
import Lottie from 'react-lottie';
// import styled from 'styled-components';
import rightAnswer from '../Animations/rightAnswer.json';
import wrongAnswer from '../Animations/wrongAnswer.json';

const defaultRightAnswer = {
  loop: false,
  autoplay: true,
  animationData: rightAnswer,
};

const defaultWrongAnswer = {
  loop: false,
  autoplay: true,
  animationData: wrongAnswer,
};

export default function QuestionResult({ isCorrect }) {
  return (
    <div>
      <Lottie
        width="100px"
        height="100px"
        margin-bottom="0px"
        options={isCorrect ? defaultRightAnswer : defaultWrongAnswer}
      />
    </div>
  );
}
