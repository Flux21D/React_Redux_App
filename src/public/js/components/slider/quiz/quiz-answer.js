import React from "react";
import createMarkup from "../../../utils/html-text";
import {quizAnswer} from "../../../utils/gtm";
import {connect} from "react-redux";
import {pad} from "../../../utils/functions";
import GTMDimentionsValues from "../../../utils/gtm-dimentions-values";

const alphabet = ["A", "B", "C", "D"];

class QuizAnswer extends React.Component {

    state = {
        questionAnswered: false,
        isCorrect: null
    };

    constructor(props) {
        super(props);

        this.onAnswerClicked = this.onAnswerClicked.bind(this);
        this.onNextClicked = this.onNextClicked.bind(this);
    }

    onNextClicked () {
        console.log("onNextClicked");

    }

    onAnswerClicked(questionId, answerId, answer) {

        const isCorrect = !!(answer.correct && answer.correct === true);

        this.setState({
            questionAnswered: true,
            isCorrect: isCorrect
        });

        const key = 'SD-CH-' + pad(this.props.questionId);

        if (GTMDimentionsValues[key]) {
            quizAnswer({
                'language': this.props.country.language,
                'country': this.props.country.country,
                'cdj': GTMDimentionsValues[key].cdj,
                'btc': GTMDimentionsValues[key].btc,
                'quizAns': answer.text
            });
        }

        this.props.onAnswer(questionId, answerId, isCorrect);
    }

    render() {
        const {answer, questionId, answerId, info} = this.props;

        let listItemClass = "";

        if (this.state.questionAnswered) {
            listItemClass = this.state.isCorrect ? "correct" : "incorrect";
            // OLUSD-113 - Challenge answers do not reset when moving between slides
            this.state.questionAnswered = false;
        }

        return (
            <li className={"answer-list-item " + listItemClass} onClick={() => {
                return this.onAnswerClicked(questionId, answerId, answer)
            }}>
                <div className="answer">
                    <div className="answer-key">{alphabet[answerId]}</div>
                    <div className="answer-text">
                        {answer.text}
                    </div>
                </div>

                {
                    this.state.isCorrect === true ?
                        <div>
                            <div className="correct-info" dangerouslySetInnerHTML={createMarkup(info)}/>
                        </div> : null
                }

                {
                    this.state.isCorrect === false ?
                        <div className="incorrect-info">Wrong answer - try again!</div> : null
                }
            </li>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        country: state.country
    }
};

export default connect(mapStateToProps)(QuizAnswer);