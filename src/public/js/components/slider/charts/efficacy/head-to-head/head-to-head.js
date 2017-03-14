import React from "react";
import {connect} from "react-redux";
import createMarkup from "../../../../../utils/html-text";
import HeadToHeadModal from "./modal";
import {openModal} from "../../../../../actions/modal";
import CollapseBtn from "../../../collapse-btn";
import Chart from "./chart";

class HeadToHead extends React.Component {

  constructor (props) {
    super (props);

    this.openModal = this.openModal.bind(this);
  }

  openModal () {
    this.props.openModal({
      Component: HeadToHeadModal,
      data: this.props.slide.slideData.modal
    });
  }

  render () {
    const {slide} = this.props;

    return (
            <div className={slide.slug}>
                <div className="chart-content">
                    <CollapseBtn />

                    <Chart />

                    <p className="chart-description" dangerouslySetInnerHTML={createMarkup(slide.slideData.chartDescription)} />

                    <div className="btn-container">
                        <span className="btn btn-blue btn-next" onClick={this.openModal}>{slide.slideData.btn.title}</span>
                    </div>
                </div>
            </div>
    );

  }

}

export default connect(null, {openModal})(HeadToHead);