import style from './Team.module.css'

export default function Team({ team }) {
  return (
    <div className={style.team}>
      <img src={team.logo} alt={team.name} className={style.team_logo} />
      <div className={style.team_name}>{team.name}</div>
    </div>
  );
}
