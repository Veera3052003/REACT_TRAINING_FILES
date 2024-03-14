import React from "react";
import "./ControlButtons.css";

export default function ControlButtons(props) {
	const StartButton = (
		<div className="btn btn-one btn-start"
			onClick={props.handleStart}>
			Start
		</div>
	);
	const ActiveButtons = (
		<div className="btn-grp">
			<div className="btn btn-two"
				onClick={props.handleReset}>
				Reset
			</div>
			<div className="btn btn-one"
				onClick={props.handlePauseResume}>
				{props.isPaused ? "Resume" : "Pause"}
			</div>
		</div>
	);

	return (
        <pre>
            <div className="Control-Buttons">
                <div>{props.active ? ActiveButtons : StartButton}</div>
                {/*false? if condition: else condition. So, only StartButton displays*/}
                {/*after the first step, active value becomes true then, true? if condition : else condition. So, ActiveButtons displays */}
            </div>
        </pre>
		
	);
}
