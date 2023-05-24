import style from './Statistics.module.css'

export default function Statistics({ statistics, setStatistics }) {
  const decrementHomeStatistic = (category) => {
    setStatistics((prev) => ({
      ...prev,
      [category]: {
        home: prev[category].home === 0 ? 0 : prev[category].home - 1,
        away: prev[category].away,
      },
    }));
  };

  const incrementHomeStatistic = (category) => {
    if (
      category === "Shots on target" &&
      statistics["Shots"].home === statistics["Shots on target"].home
    ) {
      return;
    }
    setStatistics((prev) => ({
      ...prev,
      [category]: {
        home: prev[category].home + 1,
        away: prev[category].away,
      },
    }));
  };

  const decrementAwayStatistic = (category) => {
    setStatistics((prev) => ({
      ...prev,
      [category]: {
        home: prev[category].home,
        away: prev[category].away === 0 ? 0 : prev[category].away - 1,
      },
    }));
  };

  const incrementAwayStatistic = (category) => {
    if (
      category === "Shots on target" &&
      statistics["Shots"].away === statistics["Shots on target"].away
    ) {
      return;
    }

    setStatistics((prev) => ({
      ...prev,
      [category]: {
        home: prev[category].home,
        away: prev[category].away + 1,
      },
    }));
  };

  return (
    <div className={style.statistics_container}>
      {Object.keys(statistics).map((category) => {
        return (
          <div className={style.statistics_row} key={category}>
            <div className={style.team_statistics}>
              <button
                className={style.button}
                onClick={() => decrementHomeStatistic(category)}
              >
                -
              </button>
              <div className={style.statistics_number}>
                {statistics[category].home}
              </div>
              <button
                className={style.button}
                onClick={() => incrementHomeStatistic(category)}
              >
                +
              </button>
            </div>
            <div className={style.statistics_name}>{category}</div>
            <div className={style.team_statistics}>
              <button
                className={style.button}
                onClick={() => decrementAwayStatistic(category)}
              >
                -
              </button>
              <div className={style.statistics_number}>
                {statistics[category].away}
              </div>
              <button
                className={style.button}
                onClick={() => incrementAwayStatistic(category)}
              >
                +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
