import style from './ScoreControls.module.css'

export default function ScoreControls( { history, setHistory, minute }) {
  const home = history[history.length - 1]?.home || 0;
  const away = history[history.length - 1]?.away || 0;

  const removeHomeTeamGoal = () => {
    if (home === 0) return;
    setHistory(prev => [...prev, { home: home - 1, away, minute }])
  }

  const addHomeTeamGoal = () => {
    setHistory(prev => [...prev, { home: home + 1, away, minute }])
  }

  const removeAwayTeamGoal = () => {
    if (away === 0) return;
    setHistory(prev => [...prev, { home, away: away - 1, minute }])
  }

  const addAwayTeamGoal = () => {
    setHistory(prev => [...prev, { home, away: away + 1, minute }])
  }

  return (
    <div className={style.score_controls}>
      <button className={style.button} onClick={removeHomeTeamGoal}>-</button>
      <button className={style.button} onClick={addHomeTeamGoal}>+</button>
      <button className={style.button} onClick={removeAwayTeamGoal}>-</button>
      <button className={style.button} onClick={addAwayTeamGoal}>+</button>
    </div>
  );
}
