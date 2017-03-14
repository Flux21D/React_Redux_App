import React from "react";
import SlideComponent from "./slide.component";
import {getQuizQuestionsAnswered} from "../../actions/quiz";
import getSlidesData from "../../actions/slides";
import axios from "axios";
import {connect} from "react-redux";
import find from "lodash/find";
import filter from "lodash/filter";

class ChallengesComponent extends React.Component {

    state = {
        slides: []
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        const {auth} = this.props;

        axios.all([this.props.getQuizQuestionsAnswered({
            params: {
                uuid: auth.user.uuid
            }
        }), this.props.getSlidesData('full')]).then(() => {

            const {slide, quiz} = this.props;

            const slides = slide.slides;
            const quizQuestionsAnswered = quiz.quizQuestionsAnswered;

            const slidesWithChallenges = filter(slides, slide => {
                if (slide.quiz) {
                    let i = find(quizQuestionsAnswered, {
                        question_id: parseInt(slide.quiz.id, 10)
                    });

                    if (i) {
                        slide.quizAnswer = i;
                    }

                    return slide;
                }
                return slide;
            });

            this.setState({
                slides: slidesWithChallenges
            });

        });
    }

    render() {
        return (
            <div id="challenges">
                <h1>Challenges</h1>

                <table className="slides-list">
                    <tbody>
                    {this.state.slides.map(slide => {
                        return <SlideComponent key={slide.id} slide={slide}/>;
                    })}
                    </tbody>
                </table>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        slide: state.slide,
        quiz: state.quiz,
        auth: state.auth
    };
};

const actionCreators = {
    getSlidesData,
    getQuizQuestionsAnswered
};

export default connect(mapStateToProps, actionCreators)(ChallengesComponent);