import React, {Component} from "react";
import QuizQuestionButton from "./QuizQuestionButton";
class QuizQuestion extends Component {
    constructor(props){
        super(props)
        this.state = {incorrectAnswer: false}
    }
    handleClick(buttonText){
        if(buttonText === this.props.quiz_question.answer){
            this.setState(()=>{
                return {incorrectAnswer: false}
            })
            this.props.showNextQuestionHandler()
        }else{
            this.setState(()=>{
                return {incorrectAnswer: true}
            })
        }
    }
    render(){
        return(
            <main>
                {this.state.incorrectAnswer 
                ? <p className="error">Sorry, that's not right</p>
                : null}
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options.map(
                            (txt, idx)=>{
                                return <QuizQuestionButton key={idx} button_text={txt} clickHandler={this.handleClick.bind(this)} />
                            }
                        )}
                        
                    </ul>
                </section>
            </main>
        )
    }
}   

export default QuizQuestion;