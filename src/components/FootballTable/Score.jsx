import style from './Score.module.css'

export default History = ({ history }) => {
  const lastGoal = history[history.length - 1];

  const homeTeamGoals = lastGoal ? lastGoal.home : 0;
  const awayTeamGoals = lastGoal ? lastGoal.away : 0;

  return (
    <div className={style.score}>
      {homeTeamGoals} : {awayTeamGoals}
    </div>
  );
};
