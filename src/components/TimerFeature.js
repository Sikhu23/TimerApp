import React from 'react';

const TimerFeature = (props) => {
    const {startTimerClick,paused,stopTimerClick,resetTimer}=props
    return (
        <div className="featureList">

{paused ? <i className="ph-bold ph-64 ph-pause" onClick={stopTimerClick}></i>: <i className="ph-bold ph-play" onClick={startTimerClick}></i>}

<i className="ph-bold ph-arrows-counter-clockwise" onClick={resetTimer}></i>
            
        </div>
    );
}

export default TimerFeature;
