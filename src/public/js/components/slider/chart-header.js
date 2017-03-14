import React from "react";
import createMarkup from "../../utils/html-text";

class ChartHeader extends React.Component {

  constructor (props) {
    super (props);

    this.expandChart = this.expandChart.bind(this);
  }

  expandChart () {
    this.props.expandChart();
  }

  render () {

    const {title, description} = this.props.slideData;

    return (
            <div className="chart-header">
                <span className="full-screen-btn" onClick={this.expandChart}>
                    <img src="svg/icons/icon_full_screen.svg" alt="Full screen"/>
                </span>

                <h3 className="title" dangerouslySetInnerHTML={createMarkup(title)} />
                {description ? <p className="description" dangerouslySetInnerHTML={createMarkup(description)} /> : null}
            </div>
    );

  }
}

export default ChartHeader;