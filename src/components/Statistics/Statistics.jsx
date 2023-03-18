import React from 'react';
import './Statistics.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div className="Statistics">
            <div>Good: <span id="good">{good}</span></div> 
            <div>Neutral: <span id="neutral">{neutral}</span></div>
            <div>Bad: <span id="bad">{bad}</span></div>
            <div>Total: <span id="total">{total}</span></div>
            <div>Positive Feedback: <span id="positivePercentage">{positivePercentage}</span></div>
         </div>
);
}
export default Statistics;