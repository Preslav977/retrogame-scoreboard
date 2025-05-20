import { useEffect } from 'react';
import style from './app.module.css';

import { ScoreBoardInterface } from './ScoreBoardInterface';

export interface RenderScoreBoardProps {
  scoreBoard: ScoreBoardInterface[] | null;
  setScoreBoard: (scoreBoard: ScoreBoardInterface[]) => void;
}

export function RenderScoreBoard({
  scoreBoard,
  setScoreBoard,
}: RenderScoreBoardProps) {
  const copyOfScoreBoard = [...scoreBoard];

  copyOfScoreBoard.sort((a, b) => {
    if (a.score < b.score) {
      return 1;
    } else {
      return -1;
    }
  });

  useEffect(() => {
    setScoreBoard(copyOfScoreBoard);
  }, [setScoreBoard]);

  return (
    <table className={style.table}>
      <thead className={style.tableHead}>
        <tr>
          <td className={style.tableCell}>Game name</td>
          <td className={style.tableCell}>Player name</td>
          <td className={style.tableCell}>Score</td>
          <td className={style.tableCell}>Timestamp</td>
        </tr>
      </thead>
      <tbody>
        {scoreBoard.map((score) => (
          <tr key={score.id}>
            <td>{score.playerName}</td>
            <td>{score.gameName}</td>
            <td>{score.score}</td>
            <td>{score.timestamp?.toString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
