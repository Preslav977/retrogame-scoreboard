import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { ScoreBoardInterface } from './ScoreBoardInterface';

export interface CreateNewScoreProps {
  formData: ScoreBoardInterface;
}

export function CreateNewScore({ formData }: CreateNewScoreProps) {
  const mutation = useMutation({
    mutationFn: (newScore) => {
      return axios.post(
        'https://682ad87cab2b5004cb37f1ef.mockapi.io/scoreboard_app',
        newScore
      );
    },
  });

  return (
    <div>
      {mutation.isPending ? (
        'Adding new score to the scoreboard...'
      ) : (
        <>
          {mutation.isError ? (
            <div>An error occurred: {mutation.error.message}</div>
          ) : null}

          {mutation.isSuccess ? <div>New score added!</div> : null}

          <button
            onClick={() => {
              mutation.mutate({
                playerName: formData.playerName,
                gameName: formData.gameName,
                score: formData.score,
              });
            }}
          >
            Add new score
          </button>
        </>
      )}
    </div>
  );
}
