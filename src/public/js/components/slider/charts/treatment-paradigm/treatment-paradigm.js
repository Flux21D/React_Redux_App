import React from "react";
import createMarkup from "../../../../utils/html-text";
import {connect} from "react-redux";
import CollapseBtn from "../../collapse-btn";
import TreatmentParadigmModal from "./treatment-paradigm-modal";
import {openModal} from "../../../../actions/modal";

class TreatmentParadigm extends React.Component {

  constructor (props) {
    super (props);

    this.showModal = this.showModal.bind(this);
  }

  showModal () {
    this.props.openModal({
      Component: TreatmentParadigmModal,
      data: this.props.slide.slideData.modal
    });

  }

  render () {

    const {slide} = this.props;

    return (
            <div className={slide.slug}>
                <div className="chart-content">
                    <CollapseBtn/>
                    <div className="chart-image">
                        <img src={slide.chartImg.fields.file.url} alt={slide.chartImg.fields.file.title}/>
                    </div>

                    <p className="chart-description" dangerouslySetInnerHTML={createMarkup(slide.slideData.text)} />

                    <div className="text-center">
                        <span className="btn btn-blue btn-next" onClick={this.showModal}>{slide.slideData.btnTitle}</span>
                    </div>
                </div>
            </div>
    );

  }
}

export default connect(null, {openModal})(TreatmentParadigm);