// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import { ScoreboardForm } from './ScoreboardForm';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { useState } from 'react';

import { CreateNewScore } from './CreateNewScore';

import { FetchScores } from './FetchScores';

import { RenderScoreBoard } from './RenderScoreBoard';

import { ScoreBoardInterface } from './ScoreBoardInterface';

const queryClient = new QueryClient();

export function App() {
  const [formData, setFormData] = useState<ScoreBoardInterface>({
    playerName: '',
    gameName: '',
    score: 0,
  });

  const [scoreBoard, setScoreBoard] = useState<ScoreBoardInterface[] | null>(
    null
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ScoreboardForm formData={formData} setFormData={setFormData} />
      <CreateNewScore formData={formData} />
      <FetchScores setScoreBoard={setScoreBoard} />
      {scoreBoard !== null ? (
        <RenderScoreBoard
          scoreBoard={scoreBoard}
          setScoreBoard={setScoreBoard}
        />
      ) : (
        ''
      )}
    </QueryClientProvider>
  );
}

export default App;
