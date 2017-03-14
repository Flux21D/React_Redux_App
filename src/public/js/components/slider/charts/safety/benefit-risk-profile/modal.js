import React from "react";
import createMarkup from "../../../../../utils/html-text";

class Modal extends React.Component {

  render () {
    const {title, img, disclaimer} = this.props;

    return (
            <div className="brp-dialog">
                <h3 className="text-orange" dangerouslySetInnerHTML={createMarkup(title)} />

                <div className="img-container">
                    <img src={img} alt=""/>
                </div>

                <div className="disc-container">
                    <p>{disclaimer}</p>
                </div>
            </div>
    );

  }
}

export default Modal;