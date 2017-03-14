import React from "react";
import createMarkup from "../../../utils/html-text";

class ElevatorPitch extends React.Component {

  constructor (props) {
    super (props);
  }

  render () {

    const {slide} = this.props;

    return (
            <div className={slide.slug}>
                <div className="chart-header">
                    <h3 className="title text-center" dangerouslySetInnerHTML={createMarkup(slide.title)} />
                </div>
                <div className="chart-content">
                    {slide.slideData.map((item, key) => {
                      return <p key={key} className="text-center" dangerouslySetInnerHTML={createMarkup(item.text)} />
                    })}
                </div>
            </div>
    );

  }
}

export default ElevatorPitch;