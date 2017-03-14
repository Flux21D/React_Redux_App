import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {openModal} from "../../actions/modal";
import {getQuizQuestionsAnswered} from "../../actions/quiz";
import Newsletter from "./newsletter";
import SalesRepresentative from "./sales-representative";
import filter from "lodash/filter";

class End extends React.Component {
  constructor (props) {
    super (props);

    this.openNewsletterModal = this.openNewsletterModal.bind(this);
    this.openSalesRepresentativeModal = this.openSalesRepresentativeModal.bind(this);
  }

  openNewsletterModal () {
    this.props.openModal({
      Component: Newsletter,
      dialogSettings: {
        classes: "newsletter-dialog"
      }
    });
  }

  openSalesRepresentativeModal () {
    this.props.openModal({
      Component: SalesRepresentative,
      dialogSettings: {
        classes: "newsletter-dialog"
      }
    });
  }

  componentDidMount () {

    const {auth} = this.props;

    this.props.getQuizQuestionsAnswered({
      params: {
        uuid: auth.user.uuid
      }
    });
  }

  render () {

    const {slide, quiz} = this.props;

    let totalQuestions = 0;
    if(slide.version === "full")
      totalQuestions = 8
    else
      totalQuestions = 4

    const quizQuestionsAnsweredCorrectly = filter(quiz.quizQuestionsAnswered, q => {
      let version = q.answer.split('$$')[1];
       if(slide.version === version && q.is_correct){
          return q;
      }
    });

    return (
            <div id="end">
                <h1 className="end-title text-center">Thank you!</h1>

                <div className="answer-details">
                    <p>Presentation complete: you answered</p>
                    {/*<p><span className="correct-answers">{quizQuestionsAnsweredCorrectly.length + "/" + quiz.quizQuestionsAnswered.length}</span></p>*/}
                    <p><span className="correct-answers">{quizQuestionsAnsweredCorrectly.length + "/" + totalQuestions}</span></p>
                    <p>challenges correct!</p>
                </div>

                <div className="end-container">
                    <div className="again-container">
                        <div>
                            <p className="text-white">Replay presentation</p>
                            <div>
                                {/*<Link className="btn btn-orange btn-replay" to={'slide/' + slide.version + '/' + slide.firstVisitedSlide.slug}>
                                    <img src="svg/icons/icon_replay.svg" /> Replay
                                </Link>*/}
                                <Link className="btn btn-orange btn-replay" to={'slide/' + slide.version + '/intro'}>
                                    <img src="svg/icons/icon_replay.svg" /> Replay
                                </Link>
                            </div>
                        </div>
                        <div>
                            <p className="text-white">View all of the slides</p>
                            <div>
                                <Link className="btn btn-orange btn-full" to="slide/full/intro">
                                    Full version <img src="svg/icons/arrow_white_right.svg"/>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="external-links-container">
                        <Link to="https://buit-eucan-olumi-patient0-stg.herokuapp.com" className="btn btn-transparent white" target="_blank">
                            <img src="svg/icons/icon_external_link.svg" /> Visit the patient o site
                        </Link>
                        <span onClick={this.openNewsletterModal} className="btn btn-transparent white">
                            <img src="svg/icons/icon_envelope.svg" /> Sign up to our newsletter
                        </span>
                        <span onClick={this.openSalesRepresentativeModal} className="btn btn-transparent white">Contact your local sales representative</span>
                    </div>
                </div>

                <div className="logo-container">
                    <img src="svg/logos/logo_lilly_white.svg" />
                </div>
            </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    slide: state.slide,
    quiz: state.quiz
  };
};

const actionCreators = {
  openModal,
  getQuizQuestionsAnswered
};

export default connect(mapStateToProps, actionCreators)(End);