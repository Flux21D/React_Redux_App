import React from "react";
import createMarkup from "../../../../../utils/html-text";

class Modal extends React.Component {

    state = {
        step: 0
    };

    constructor(props) {
        super(props);
    }

    render() {

        const {title, description, img} = this.props;

        return (
            <div className="ras-dialog">
                <h3 className="text-orange" dangerouslySetInnerHTML={createMarkup(title)}/>

                <p>{description}</p>

                <div className="img-container" onClick={this.handleClick}>
                    <img src="img/charts/clinical-trial-program/modal.jpg"/>

                    <img className="left_first" src="img/charts/clinical-trial-program/left_first.png"/>
                    <img className="left_second" src="img/charts/clinical-trial-program/left_second.png"/>
                    <img className="left_third" src="img/charts/clinical-trial-program/left_third.png"/>

                    <img className="right_first" src="img/charts/clinical-trial-program/right_first.png"/>
                    <img className="right_second" src="img/charts/clinical-trial-program/right_second.png"/>
                    <img className="right_third" src="img/charts/clinical-trial-program/right_third.png"/>

                    <div className="contentOne"/>
                    <div className="contentTwo"/>
                    <div className="contentThree"/>
                    <div className="contentFour"/>

                    <div className="contentFive"/>
                </div>
            </div>
        );

    }

}

export default Modal;