import React from "react";
import {connect} from "react-redux";
import CollapseBtn from "../../../collapse-btn";
import {openModal} from "../../../../../actions/modal";
import Modal from "../rapid-and-sustained/modal";
import Chart from "./chart";

class DiseaseActivity extends React.Component {

  constructor (props) {
    super (props);

    this.openModal = this.openModal.bind(this);
  }

  openModal (data) {
    this.props.openModal({
      Component: Modal,
      data: data
    });
  }

  render () {

    const {slide} = this.props;

    return (
            <div className={slide.slug}>
                <div className="chart-content">
                    <CollapseBtn/>

                    <Chart />

                    <div className="btn-container">
                        <span onClick={() => {return this.openModal(slide.slideData.exploreBtn.modal)}} className="btn btn-blue btn-next">{slide.slideData.exploreBtn.title}</span>
                    </div>
                </div>
            </div>
    );

  }

}

export default connect(null, {openModal})(DiseaseActivity);