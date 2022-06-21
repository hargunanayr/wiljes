import React, { useRef, useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { CountdownContainer, CountdownWrapper, CountdownCard, CountdownTitle } from './CountdownElements';

const Countdown = () => {
    const minuteSeconds = 60;
    const hourSeconds = 3600;
    const daySeconds = 86400;

    // if (window.matchMedia("(max-width: 768px)").matches) { // If media query matches
    //     const timerProps = {
    //         isPlaying: true,
    //         size: 100,
    //         strokeWidth: 6
    //     };
    // } else {
    //     const timerProps = {
    //         isPlaying: true,
    //         size: 180,
    //         strokeWidth: 6
    //     };
    // }
    
    const timerProps = window.matchMedia("(max-width: 480px)").matches ? 
    {
        isPlaying: true,
        strokeWidth: 6,
        size: 120
    }
    : 
    {
        isPlaying: true,
        strokeWidth: 6,
        size: 180
    };

    // const timerProps = {
    //     isPlaying: true,
    //     size: 120,
    //     strokeWidth: 6
    // };
    
    const renderTime = (dimension, time) => {
        return (
        <div className="time-wrapper">
            <div className="time">{time}</div>
            <div>{dimension}</div>
        </div>
        );
    };
    
    
    const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
    const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
    const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
    const getTimeDays = (time) => (time / daySeconds) | 0;

    const startTime = Date.now() / 1000; // use UNIX timestamp in seconds
    const endTime = Date.parse('2022-06-30') / 1000;

    const remainingTime = endTime - startTime;
    const days = Math.ceil(remainingTime / daySeconds);
    const daysDuration = days * daySeconds;

    return (
        <CountdownContainer>
            <CountdownTitle>Countdown Timer</CountdownTitle>
            <CountdownWrapper>
                <CountdownCard>
                <CountdownCircleTimer
                {...timerProps}
                colors="#ba8300"
                duration={daysDuration}
                initialRemainingTime={remainingTime}
                >
                    {({ elapsedTime, color }) => (
                    <span style={{ color }}>
                        {renderTime("Days", getTimeDays(daysDuration - elapsedTime))}
                    </span>
                    )}
                </CountdownCircleTimer>
                </CountdownCard>
                <CountdownCard>
                <CountdownCircleTimer
                {...timerProps}
                colors="#ba8300"
                duration={daySeconds}
                initialRemainingTime={remainingTime % daySeconds}
                onComplete={(totalElapsedTime) => ({
                shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
                })}
                >
                    {({ elapsedTime, color }) => (
                    <span style={{ color }}>
                        {renderTime("Hours", getTimeHours(daySeconds - elapsedTime))}
                    </span>
                    )}
                </CountdownCircleTimer>
                </CountdownCard>
                <CountdownCard>
                <CountdownCircleTimer
                {...timerProps}
                colors="#ba8300"
                duration={hourSeconds}
                initialRemainingTime={remainingTime % hourSeconds}
                onComplete={(totalElapsedTime) => ({
                shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
                })}
                >
                    {({ elapsedTime, color }) => (
                    <span style={{ color }}>
                        {renderTime("Minutes", getTimeMinutes(hourSeconds - elapsedTime))}
                    </span>
                    )}
                </CountdownCircleTimer>
                </CountdownCard>
                <CountdownCard>
                <CountdownCircleTimer
                {...timerProps}
                colors="#ba8300"
                duration={minuteSeconds}
                initialRemainingTime={remainingTime % minuteSeconds}
                onComplete={(totalElapsedTime) => ({
                shouldRepeat: remainingTime - totalElapsedTime > 0
                })}
                >
                    {({ elapsedTime, color }) => (
                    <span style={{ color }}>
                        {renderTime("Seconds", getTimeSeconds(elapsedTime))}
                    </span>
                    )}
                </CountdownCircleTimer>
                </CountdownCard>
            </CountdownWrapper>
            
            
            
            
        </CountdownContainer>
    )
}

export default Countdown