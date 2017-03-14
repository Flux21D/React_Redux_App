import React from "react";

class SliderProgress extends React.Component {

  constructor (props) {
    super (props);
  }

  render () {

    const {slidesNumber, activeSlideIndex} = this.props;

    const drawProgressbar = () => {

      let a = [];

      for (let i = 0; i < slidesNumber; i++) {
        a.push(<li key={i} className={activeSlideIndex === i ? "active": null}><div /></li>)
      }

      return a;
    };

    return (
            <ul className="progress-container">
                {drawProgressbar()}
            </ul>
    );
  }

}

export default SliderProgress;