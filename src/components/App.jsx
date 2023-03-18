import React from 'react';
import FeedbackOptions from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends React.Component {

  state = {
        good: 0,
        neutral: 0,
        bad: 0,
   }
   LeaveFeedback = (label) => {
   
    this.setState({ [label]: this.state[label] + 1 })
  }

   render() {
     const total = this.state.bad + this.state.neutral + this.state.good;
     const positivePercent =(total>0)? Math.round(this.state.good / total * 100) : 0;
     return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.LeaveFeedback} />
        </Section>
         <Section title="Statistics">
           {total > 0 ? (
             <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total} positivePercentage={positivePercent + '%'} />
           ) : (
               <Notification message="There is no feedback" />
           )}
        </Section>
      </div>
    );
  }
}