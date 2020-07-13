import React, { useState, useEffect } from "react";
import BottomRow from "./BottomRow";
import TopRow from './TopRow'
import Buttons from './Buttons'
import "../App.css";

function App() {
  const [homeScore, setHomeScore] = useState(0)
  const [awayScore, setAwayScore] = useState(0)
  const [quarter, setQuarter] = useState(1)
  const [timer, setTimer] = useState(5)
  const [id, setId] = useState('')
  let x;

  useEffect(() => {
    if (timer === 5) {
      let intervalId = setInterval(() => {
        setId(intervalId)
        setTimer(prevTimer => prevTimer - 1)
      }, 1000);
    }
    if (timer === 0) {
      clearInterval(id)
    }
  }, [timer])

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow timer={timer} home={homeScore} away={awayScore} />
        <BottomRow value={quarter} increment={setQuarter} />
      </section>
      <Buttons
        homeTd={() => setHomeScore(homeScore + 7)}
        homeField={() => setHomeScore(homeScore + 3)}
        awayTd={() => setAwayScore(awayScore + 7)}
        awayField={() => setAwayScore(awayScore + 3)}
        quarter={() => setQuarter(quarter + 1)}
      />
      <button onClick={() => console.log(timer)}>x</button>
    </div>
  );
}

export default App;
