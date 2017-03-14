import React from "react";
import QuizAnswer from "./quiz-answer";
import {saveUserQuizAnswer} from "../../../actions/quiz";
import {connect} from "react-redux";

let sversion;
class Quiz extends React.Component {

    constructor(props) {
        super(props);
        const {quizData,version} = this.props;
        sversion = version;
        this.onAnswer = this.onAnswer.bind(this);
    }

    onAnswer(questionId, answerId, isCorrect) {
        saveUserQuizAnswer({
            uuid: this.props.auth.user.uuid,
            questionId: questionId,
            question: this.props.quizData.question,
            answerId: answerId,
            answer: this.props.quizData.answers[answerId].text+'$$'+sversion,
            isCorrect: isCorrect
        });
    }

    render() {

        const {quizData} = this.props;

        return (
            <div id="quiz">
                <h4 className="text-orange">{quizData.question}</h4>

                <ul className="answer-list">
                    {quizData.answers.map((answer, key) => {
                        return <QuizAnswer key={key} questionId={quizData.id} answerId={key} answer={answer}
                                           info={quizData.info} onAnswer={this.onAnswer}/>
                    })}
                </ul>

                <div className="quiz-progress-container">
                    <div className="active"></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {

    return {
        auth: state.auth
    };

};

export default connect(mapStateToProps)(Quiz);