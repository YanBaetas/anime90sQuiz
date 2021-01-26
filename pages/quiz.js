import React from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import { QuizContainer } from './index';

export default function QuizPage() {
  const router = useRouter();
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h2>
              Página do Quiz. Olá
              { ' ' }
              {router.query.name}
            </h2>
          </Widget.Header>
        </Widget>
      </QuizContainer>
    </QuizBackground>
  );
}
