import React, { useEffect, useState } from 'react';
import TimerFeature from './TimerFeature';

const Timer = () => {
    const [sec,setSec]=useState(0)
    const [min,setMin]=useState(0)
    const [hour,setHour]=useState(0)
    const [day,setDay]=useState(0)
   const [showPause,setShowPause]=useState(false)
   const [intervalId,setIntervalId]=useState(null)
   let startIntervalTimer =null

    const getCurrentTime =()=>{

    }

    intToString=(data)=>{
        
             return data>=10?data: `0${data}`
        
      

    }

    useEffect(()=>{

        if(hour>0 && hour%24==0)
            setHour(day=>(day+1))
    },[hour])

    useEffect(()=>{

        if(min>0 && min%60==0)
            setHour(hour=>(hour+1))
    },[min])
    useEffect(()=>{
        if(sec>0 && sec%60==0)
            setMin(min=>(min+1))
    },[sec])

    const startTimer=()=>{
        setSec(sec=>(sec+1));
    }



    const startTimerClick=()=>{
      setShowPause(true)
      startIntervalTimer= setInterval(startTimer,1000)
      setIntervalId(startIntervalTimer)
    }


    const stopTimerClick=()=>{
        setShowPause(false)
        clearInterval(intervalId);
      }



      const resetTimer=()=>{
        stopTimerClick()
        setSec(0)
        setHour(0)
        setMin(0)
        setDay(0)
      }
    return (
        <div className='center-div'>


           <p style={{fontSize:"120px"}}>{intToString(day)} : {intToString(hour%24)} : {intToString(min%60)} : {(intToString(sec%60))}</p> 
            




            <TimerFeature paused={showPause} startTimerClick={startTimerClick} stopTimerClick={stopTimerClick}  resetTimer={resetTimer}/>


            
        </div>
    );
}

export default Timer;
