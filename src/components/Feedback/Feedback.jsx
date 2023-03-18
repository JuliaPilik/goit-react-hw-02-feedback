import React from 'react';
import css from './Feedback.module.css';

class FeedbackOptions extends React.Component {

    
//    Increment = (opt) => {
//         // this.setState(prevState => ({
//         //    good: prevState.good + 1,
//         // }))
//        console.log(opt);
//     };
    // NeutralIncrement = () => {
        
    // };
    // BadIncrement = () => {
        
    // };
    render() {
        const optionsName = this.props.options;
        return (
            
            <div className="Feedback__options">
                {optionsName.map((option) => (
                    <button type="button" className={css.button} id={option} onClick={()=>this.props.onLeaveFeedback(option)} >{option}</button>   
               ))}
                 {/* <div>Good:<span>{this.state.good}</span></div>  */}
            </div>

            
                
        );
    }
}

export default FeedbackOptions;