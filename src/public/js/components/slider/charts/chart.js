import React from "react";
import {connect} from "react-redux";
import ChartHeader from "../chart-header";
import {openModal} from "../../../actions/modal";

class Chart extends React.Component {

  constructor (props) {
    super (props);

    this.expandChart = this.expandChart.bind(this);
  }

  expandChart () {
    this.props.openModal({
      Component: this.props.ComponentData.ChartContent,
      data: {
        slide: this.props.slide
      },
      additionalData: {
        expanded: true
      },
      dialogSettings: {
        classes: "full-screen chart-expanded"
      }
    });
  }

  render () {

    const {ComponentData, slide} = this.props;

    const ChartContentComponent = ComponentData.ChartContent;
    const configs = ComponentData.configs;


    let styles = {};

    if (slide.bgImg) {
      styles.backgroundImage = "url(" + slide.bgImg.fields.file.url + ")";
    }

    return (
            <div className="chart-container">
                <div className="chart-content-container" style={styles}>
                    {configs.showHeader ?
                        <ChartHeader expandChart={this.expandChart} slideData={slide} /> : null}

                    <ChartContentComponent expandChart={this.expandChart} {...this.props} />
                </div>
            </div>
    );
  }

}

export default connect(null, {openModal})(Chart);