import React from "react";
import createMarkup from "../../../../../utils/html-text";
import Modal from "./modal";
import {connect} from "react-redux";
import {openModal} from "../../../../../actions/modal";

class BenefitRiskProfile extends React.Component {

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
                <div className="chart-header">
                    <h3 className="title" dangerouslySetInnerHTML={createMarkup(slide.title)} />
                </div>
                <div className="chart-content">
                    <ul className="benefits-list">
                        {slide.slideData.map((item, key) => {
                          return <li key={key} className="benefits-list-item">
                                <div className="thumbnail-container">
                                    <img src={item.thumbnail} />
                                </div>

                                <p dangerouslySetInnerHTML={createMarkup(item.description)} />
                                
                                <div className="btn-container">
                                    <span onClick={() => {this.openModal(item.btn.modal)}} className="btn btn-blue btn-next">{item.btn.title}</span>
                                </div>
                            </li>
                        })}
                    </ul>

                </div>

            </div>
    );

  }

}

export default connect(null, {openModal})(BenefitRiskProfile);