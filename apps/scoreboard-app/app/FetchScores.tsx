import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

import { ScoreBoardInterface } from './ScoreBoardInterface';

export interface FetchScoresProps {
  setScoreBoard: (data: ScoreBoardInterface[]) => void;
}

export function FetchScores({ setScoreBoard }: FetchScoresProps) {
  const { isPending, error, data } = useQuery({
    queryKey: [''],
    queryFn: async () => {
      const response = await fetch(
        'https://682ad87cab2b5004cb37f1ef.mockapi.io/scoreboard_app'
      );

      return response.json();
    },
  });

  useEffect(() => {
    if (!isPending) {
      setScoreBoard(data);
    }
  }, [data]);

  if (isPending) {
    return 'Loading...';
  }

  if (error) return 'An network error has encountered: ' + error.message;
}
