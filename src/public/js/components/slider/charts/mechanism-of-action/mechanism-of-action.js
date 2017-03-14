import React from "react";
import {connect} from "react-redux";
import createMarkup from "../../../../utils/html-text";
import CollapseBtn from "../../collapse-btn";
import GTMDimentionsValues from "../../../../utils/gtm-dimentions-values";
import Chart from "./chart";

class MechanismOfAction extends React.Component {

  constructor (props) {
    super (props);

    this.imageMapCallback = this.imageMapCallback.bind(this);
  }

  imageMapCallback () {
    dataLayer.push({
      'event': 'CustomClick',
      'language': this.props.country.language,
      'country': this.props.country.country,
      'cdj': GTMDimentionsValues['SD-SL-03-HI'].cdj,
      'btc': GTMDimentionsValues['SD-SL-03-HI'].btc
    });
  }

  render () {
    const {slide} = this.props;

    return (
            <div className={slide.slug}>
                <div className="chart-content">
                    <CollapseBtn />

                    <Chart slide={slide} imageMapCallback={this.imageMapCallback} />

                    <p className="text-center chart-image-description" dangerouslySetInnerHTML={createMarkup(slide.slideData.text)} />
                </div>
            </div>
    );

  }
}

const mapStateToProps = (state) => {
  return {
    country: state.country
  }
};

export default connect(mapStateToProps)(MechanismOfAction);