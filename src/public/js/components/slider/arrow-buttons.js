import React from "react";
import {Link} from "react-router";
import SliderProgress from "./slider-progress";

class ArrowButtons extends React.Component {

  constructor (props) {
    super (props);
    this.setQuizState = this.setQuizState.bind(this);
  }

  setQuizState(){
    this.props.setVideoState();
  }

  render () {

    const {next, prev, slidesNumber, activeSlideIndex} = this.props;

    return (
            <div className="arrow-buttons-container">
                <div className="previous-container">
                    <Link to={prev} onClick={this.setQuizState} className="btn btn-transparent btn-previous">PREVIOUS</Link>
                </div>

                <div className="buttons-progress-container">
                    <SliderProgress slidesNumber={slidesNumber} activeSlideIndex={activeSlideIndex} />
                </div>

                <div className="next-container">
                    <Link to={next} onClick={this.setQuizState} className="btn btn-orange btn-next">NEXT</Link>
                </div>
            </div>
    );

  }
}

export default ArrowButtons;