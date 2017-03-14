import React from "react";
import QuizComponent from "./quiz/quiz";
import VideoComponent from "./video.component";
import ArrowButtons from "./arrow-buttons";
import Chart from "./charts/chart";

import getChartComponent from "../../utils/slide-dispatcher";

class SlideItem extends React.Component {

  state = {
    showQuizScreen: false,
    showVideoSection: false
  };

  constructor (props) {
    super (props);

    this.showQuiz = this.showQuiz.bind(this);
    this.goToSlide = this.goToSlide.bind(this);
    this.toggleVideoSection = this.toggleVideoSection.bind(this);
    this.setVideoState = this.setVideoState.bind(this);
    this.saveCoverState=this.saveCoverState.bind(this);
    this.getCoverState=this.getCoverState.bind(this);
  }

  goToSlide (goTo) {
    this.props.goToSlide(goTo);
  }

  saveCoverState(state){
    this.props.saveCoverState(state);
  }

  getCoverState(){
    return this.props.getCoverState();
  }

  showQuiz () {
    // this.props.saveCoverState(false);
    this.setState({
      showQuizScreen: true
    });
  }

  setVideoState(){
    this.props.saveCoverState(false);
    this.setState({
      showQuizScreen: false
    });
  }

  toggleVideoSection () {
    this.setState({
      showVideoSection: !this.state.showVideoSection
    });
  }

  render () {
    const {slides, activeSlideIndex, next, prev, version, saveCoverState, getCoverState} = this.props;

    const slide = slides[activeSlideIndex];

    return (
            <div className={"slide-container " + (this.state.showVideoSection ? "expanded" : "")}>
                <div className="left-side">
                    <span className="btn-expand" onClick={this.toggleVideoSection}>
                        {this.state.showVideoSection ?
                            <img src="svg/icons/arrow_orange_left.svg" alt="Collapse"/> :
                            <img src="svg/icons/arrow_orange_right.svg" alt="Expand"/>}

                    </span>

                    {
                        (this.state.showQuizScreen && slide.quiz) ?
                        <QuizComponent quizData={slide.quiz} version={version}/> :
                        <VideoComponent id={slide.id} slide={slide} videoId={slide.videoId} videoScript={slide.videoScript} hasQuiz={slide.quiz} showQuiz={this.showQuiz} saveCoverState={this.saveCoverState} getCoverState={this.getCoverState}/>
                    }
                </div>
                <div className="right-side">
                    <Chart ComponentData={getChartComponent(slide.slug)} slide={slide} />

                    <ArrowButtons goToSlide={this.goToSlide} next={next} prev={prev} slidesNumber={slides.length} activeSlideIndex={activeSlideIndex} setVideoState={this.setVideoState}/>
                </div>
            </div>
    );
  }

}

export default SlideItem;