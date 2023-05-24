import FootballTable from "./components/FootballTable";

const homeTeam = {
  name: "Chelsea",
  logo: "chelsea.svg",
};

const awayTeam = {
  name: "Arsenal",
  logo: "arsenal.svg",
};

function App() {
  return (
      <div className="App">
        <FootballTable
          homeTeam={homeTeam}
          awayTeam={awayTeam}
          oneMinuteMilliseconds={1000}
        />
      </div>
  );
}

export default App;
