import React from "react";
import CollapseBtn from "../../collapse-btn";

class TreatmentConsiderations extends React.Component {

  constructor (props) {
    super (props);
  }

  render () {

    const {slide} = this.props;

    return (
            <div className="chart-content">
                <CollapseBtn />
                <div className="chart-image">
                    <img src={slide.chartImg.fields.file.url} alt={slide.chartImg.fields.file.title}/>
                </div>
            </div>
    );

  }

}

export default TreatmentConsiderations;