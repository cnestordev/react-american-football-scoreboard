import React from 'react';

export default function Buttons(props) {
    return (
        <section className="buttons">
            <div className="homeButtons">
                <button onClick={props.homeTd} className="homeButtons__touchdown">Home Touchdown</button>
                <button onClick={props.homeField} className="homeButtons__fieldGoal">Home Field Goal</button>
            </div>
            <div className="awayButtons">
                <button onClick={props.awayTd} className="awayButtons__touchdown">Away Touchdown</button>
                <button onClick={props.awayField} className="awayButtons__fieldGoal">Away Field Goal</button>
            </div>
            <div>
                <button onClick={props.quarter}>Next Quarter</button>
            </div>
        </section>
    )
}