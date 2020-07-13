import React, { useState } from "react";
import BottomRow from "./BottomRow";
import TopRow from './TopRow'
import Buttons from './Buttons'
import "../App.css";

function App() {
  const [homeScore, setHomeScore] = useState(0)
  const [awayScore, setAwayScore] = useState(0)
  const [quarter, setQuarter] = useState(1)
  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow home={homeScore} away={awayScore} />
        <BottomRow value={quarter} increment={setQuarter} />
      </section>
      <Buttons
        homeTd={() => setHomeScore(homeScore + 7)}
        homeField={() => setHomeScore(homeScore + 3)}
        awayTd={() => setAwayScore(awayScore + 7)}
        awayField={() => setAwayScore(awayScore + 3)}
        quarter={() => setQuarter(quarter + 1)}
      />
    </div>
  );
}

export default App;
