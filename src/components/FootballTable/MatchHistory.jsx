import style from './MatchHistory.module.css'

export default function MatchHistory({history}) {
  return (
    <div className={style.history}>
      <div className={style.title}>Match History:</div>
      {history.map((item, index) => (
        <div key={index}>
          {item.home} : {item.away} - ({item.minute} min)
        </div>
      ))}
    </div>
  );
}
