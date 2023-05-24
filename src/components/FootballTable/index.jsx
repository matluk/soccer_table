import { useState } from "react";
import style from './index.module.css'
import ScoreControls from "./ScoreControls";
import Statistics from "./Statistics";
import useMatchTime from "../../utils/useMatchTime";
import MatchHistory from "./MatchHistory"
import Score from "./Score";
import Team from "./Team";

const getInitialStatistics = () => ({
  'Shots': { home: 0, away: 0 },
  'Shots on target': { home: 0, away: 0 },
  'Fauls committed': { home: 0, away: 0 },
  'Offsides': { home: 0, away: 0 },
  'Yellow cards': { home: 0, away: 0 },
  'Red cards': { home: 0, away: 0  },
})

export default function FootballTable({
  homeTeam,
  awayTeam,
  oneMinuteMilliseconds,
}) {
  const [history, setHistory] = useState([]);
  const [statistics, setStatistics] = useState(getInitialStatistics());
  const [minute, setMinute] = useMatchTime({ oneMinuteMilliseconds });

  const resetTable = () => {
    setHistory([])
    setMinute(0)
    setStatistics(getInitialStatistics())
  }

  return (
    <div className={style.football_table}>
      <div className={style.date}>{new Date().toLocaleDateString('en-GB')}</div>
      <div className={style.time}>{minute} min</div>
      <div className={style.football_table_content}>
        <Team team={homeTeam} />
        <Score history={history} />
        <Team team={awayTeam} />
      </div>
      <ScoreControls history={history} setHistory={setHistory} minute={minute} />
      <MatchHistory history={history} />
      <Statistics statistics={statistics} setStatistics={setStatistics} />
      <button className={style.button} onClick={resetTable}>RESET</button>
    </div>
  );
}
